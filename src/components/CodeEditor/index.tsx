import MonacoEditor from "@monaco-editor/react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import React, { useRef } from "react";
import rustAnalyserEngine from "./rustAnalyser/index";
import example_code from "./rustAnalyser/example-code.rs";

const styles = {
  wrapper: "h-full w-full",
};

interface CodeEditorInterface {
  language?: string;
  height?: string;
}

type Monaco = typeof monaco;

export default function CodeEditor({
  language = "javascript",
  height = "500px",
}: CodeEditorInterface) {
  const editorRef = useRef<Monaco | null>(null);

  const handleOnMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    monaco: Monaco
  ) => {
    editorRef.current = monaco;
    runCompilerEngine(language);
  };

  const runCompilerEngine = (language: String) => {
    if (editorRef.current) {
      // Initialize the WebAssembly module.

      switch (language) {
        case "rust":
          rustAnalyserEngine.startRustAnalyserEngine(editorRef.current);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <MonacoEditor
        value={example_code}
        height={height}
        theme="vs-dark"
        language={language}
        onMount={handleOnMount}
        options={{
          wordWrap: "on",
          minimap: {
            enabled: false,
          },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          // tabCompletion: "on",
        }}
      />
    </div>
  );
}
