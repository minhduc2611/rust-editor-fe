// import {exampleCode} from './example-code.js';
import fake_std from "./fake_std.rs?raw";
import fake_core from "./fake_core.rs?raw";
import fake_alloc from "./fake_alloc.rs?raw";
import { conf, grammar } from "./rust-grammar";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

type Monaco = typeof monaco;

type StateType = {
  update: (arg: string) => void;
};

interface monacoType {
  editor: Object;
  SelectionDirection: Object;
}

class RustAnalyserEngine {
  state: StateType | Object | undefined;
  allTokens: string | undefined;
  modeId = "rust";
  monaco: monacoType | Object | undefined;
  worker: Object | undefined;
  async startRustAnalyserEngine(monaco: Monaco) {
    if (!monaco || (typeof monaco !== "object" && !monaco.editor)) {
      throw new Error("Monaco is not defined");
    }
    this.monaco = monaco;
    // var loadingText = document.createTextNode("Loading wasm...");
    // document.body.appendChild(loadingText);

    let model = monaco.editor.getModels()[0];

    // window.editor = monaco.editor;
    // let state = null; //await createRA();

    const update = async () => {
      const content = model.getValue();
      const res = await this.state.update(content);
      monaco.editor.setModelMarkers(model, this.modeId, res.diagnostics);
      this.allTokens = res.highlights;
    };

    monaco.editor.defineTheme("vscode-dark-plus", {
      base: "vs-dark",
      inherit: true,
      colors: {
        "editorInlayHint.foreground": "#A0A0A0F0",
        "editorInlayHint.background": "#11223300",
      },
      rules: [
        { token: "keyword.control", foreground: "C586C0" },
        { token: "variable", foreground: "9CDCFE" },
        { token: "support.function", foreground: "DCDCAA" },
      ],
    });
    // document.body.removeChild(loadingText);
    const initRA = async () => {

      monaco.languages.onLanguage(this.modeId, async () => {
        monaco.languages.setLanguageConfiguration(modeId, conf);
        monaco.languages.setMonarchTokensProvider(modeId, grammar);
      });
      this.state = await this.createRA();
   
      await this.registerRA(monaco);

      this.state.init(model.getValue(), fake_std, fake_core, fake_alloc);
      update();
      model.onDidChangeContent(update);
    };
    initRA();
    // const myEditor = monaco.editor.create(document.body, {
    //     theme: 'vscode-dark-plus',
    //     model: model
    // });

    // window.onresize = () => myEditor.layout();
  }
  async createRA() {
    try {
      this.worker = new Worker(new URL("ra-worker.tsx", import.meta.url));
    } catch (e) {
    }
    const pendingResolve = {};

    let id = 1;
    let ready;

    const callWorker = async (which, ...args) => {
      return new Promise((resolve, _) => {
        pendingResolve[id] = resolve;
        this.worker.postMessage({
          which: which,
          args: args,
          id: id,
        });
        id += 1;
      });
    };

    const proxyHandler = {
      get: (target, prop, _receiver) => {
        if (prop == "then") {
          return Reflect.get(target, prop, _receiver);
        }
        return async (...args) => {
          return callWorker(prop, ...args);
        };
      },
    };

    this.worker.onmessage = (e) => {
      if (e.data.id == "ra-worker-ready" || !e.data.result) {
        ready(new Proxy({}, proxyHandler));
        return;
      }
      const pending = pendingResolve[e.data.id];
      if (pending) {
        pending(e.data.result);
        delete pendingResolve[e.data.id];
      }
    };

    return new Promise((resolve, _) => {
      ready = resolve;
    });
  }
  async registerRA(monaco) {
    const state = this.state;
    monaco.languages.registerHoverProvider(this.modeId, {
      provideHover: (_, pos) => {
        return state.hover(pos.lineNumber, pos.column);
      },
    });
    monaco.languages.registerCodeLensProvider(this.modeId, {
      async provideCodeLenses(m) {
        const code_lenses = await state.code_lenses();
        const lenses = code_lenses.map(({ range, command }) => {
          const position = {
            column: range.startColumn,
            lineNumber: range.startLineNumber,
          };

          const references = command.positions.map((pos) => ({
            range: pos,
            uri: m.uri,
          }));

          return {
            range,
            command: {
              id: command.id,
              title: command.title,
              arguments: [m.uri, position, references],
            },
          };
        });
        return { lenses, dispose() {} };
      },
    });
    monaco.languages.registerReferenceProvider(this.modeId, {
      async provideReferences(m, pos, { includeDeclaration }) {
        const references = await this.state.references(
          pos.lineNumber,
          pos.column,
          includeDeclaration
        );
        if (references) {
          return references.map(({ range }) => ({ uri: m.uri, range }));
        }
      },
    });
    monaco.languages.registerInlayHintsProvider(this.modeId, {
      async provideInlayHints(model, range, token) {
        let hints = await state.inlay_hints();

        return {
          hints: hints.map((hint) => {
            if (hint.hint_type == 1) {
              return {
                kind: 1,
                position: {
                  column: hint.range.endColumn,
                  lineNumber: hint.range.endLineNumber,
                },
                label: `: ${hint.label}`,
              };
            }
            if (hint.hint_type == 2) {
              return {
                kind: 2,
                position: {
                  column: hint.range.startColumn,
                  lineNumber: hint.range.startLineNumber,
                },
                label: `${hint.label}:`,
                whitespaceAfter: true,
              };
            }
          }),
        };
      },
    });
    monaco.languages.registerDocumentHighlightProvider(this.modeId, {
      async provideDocumentHighlights(_, pos) {
        return await state.references(pos.lineNumber, pos.column, true);
      },
    });
    monaco.languages.registerRenameProvider(this.modeId, {
      async provideRenameEdits(m, pos, newName) {
        const edits = await state.rename(pos.lineNumber, pos.column, newName);
        if (edits) {
          return {
            edits: edits.map((edit) => ({
              resource: m.uri,
              edit,
            })),
          };
        }
      },
      async resolveRenameLocation(_, pos) {
        return state.prepare_rename(pos.lineNumber, pos.column);
      },
    });
    monaco.languages.registerCompletionItemProvider(this.modeId, {
      triggerCharacters: [".", ":", "="],
      async provideCompletionItems(_m, pos) {
        const suggestions = await state.completions(pos.lineNumber, pos.column);

        if (suggestions) {
          return {
            suggestions: suggestions.map((el) => ({
              ...el,
              label: el.label,
              kind: el.kind,
              insertText: el.insertText,
              range: el.range,
            })),
          };
        }
      },
    });
    monaco.languages.registerSignatureHelpProvider(this.modeId, {
      signatureHelpTriggerCharacters: ["(", ","],
      async provideSignatureHelp(_m, pos) {
        const value = await state.signature_help(pos.lineNumber, pos.column);
        if (!value) return null;
        return {
          value,
          dispose() {},
        };
      },
    });
    monaco.languages.registerDefinitionProvider(this.modeId, {
      async provideDefinition(m, pos) {
        const list = await state.definition(pos.lineNumber, pos.column);
        if (list) {
          return list.map((def) => ({ ...def, uri: m.uri }));
        }
      },
    });
    monaco.languages.registerTypeDefinitionProvider(this.modeId, {
      async provideTypeDefinition(m, pos) {

        const list = await state.type_definition(pos.lineNumber, pos.column);
        if (list) {
          return list.map((def) => ({ ...def, uri: m.uri }));
        }
      },
    });
    monaco.languages.registerImplementationProvider(this.modeId, {
      async provideImplementation(m, pos) {

        const list = await state.goto_implementation(
          pos.lineNumber,
          pos.column
        );
        if (list) {
          return list.map((def) => ({ ...def, uri: m.uri }));
        }
      },
    });
    monaco.languages.registerDocumentSymbolProvider(this.modeId, {
      async provideDocumentSymbols() {

        return await state.document_symbols();
      },
    });
    monaco.languages.registerOnTypeFormattingEditProvider(this.modeId, {
      autoFormatTriggerCharacters: [".", "="],
      async provideOnTypeFormattingEdits(_, pos, ch) {

        return await state.type_formatting(pos.lineNumber, pos.column, ch);
      },
    });
    monaco.languages.registerFoldingRangeProvider(this.modeId, {
      async provideFoldingRanges() {

        return await state.folding_ranges();
      },
    });

    class TokenState {
      constructor(line = 0) {
        this.line = line;
        this.equals = () => true;
      }

      clone() {
        const res = new TokenState(this.line);
        res.line += 1;
        return res;
      }
    }

    function fixTag(tag) {
      switch (tag) {
        case "builtin":
          return "variable.predefined";
        case "attribute":
          return "key";
        case "macro":
          return "number.hex";
        case "literal":
          return "number";
        default:
          return tag;
      }
    }

    /*monaco.languages.setTokensProvider(this.modeId, {
          getInitialState: () => new TokenState(),
          tokenize(_, st) {
              const filteredTokens = allTokens
                  .filter((token) => token.range.startLineNumber === st.line);
  
              const tokens = filteredTokens.map((token) => ({
                  startIndex: token.range.startColumn - 1,
                  scopes: fixTag(token.tag),
              }));
              tokens.sort((a, b) => a.startIndex - b.startIndex);
  
              return {
                  tokens,
                  endState: new TokenState(st.line + 1),
              };
          },
      });*/
  }
}

export default new RustAnalyserEngine();
