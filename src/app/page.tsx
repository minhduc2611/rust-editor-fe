"use client";
import CodeEditor from "@/components/CodeEditor";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-2/4 h-100">
        <CodeEditor height="1000px" language="rust" />
      </div>
      <div className="bg-black">Result</div>
    </div>
  );
}
