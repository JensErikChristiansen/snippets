"use client";

import { Snippet } from "@prisma/client";
import { useState } from "react";
import Editor from "@monaco-editor/react";

type ComponentProps = {
  snippet: Snippet;
};

export default function SnippetEditForm({ snippet }: ComponentProps) {
  const [code, setCode] = useState(snippet.code);

  function handleEditorChange(value = "") {
    setCode(value);
  }

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={code}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={handleEditorChange}
      />
    </div>
  );
}
