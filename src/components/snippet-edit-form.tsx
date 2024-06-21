"use client";

import { Snippet } from "@prisma/client";
import { useState } from "react";
import Editor from "@monaco-editor/react";
import * as actions from "@/actions";

type ComponentProps = {
  snippet: Snippet;
};

export default function SnippetEditForm({ snippet }: ComponentProps) {
  const [code, setCode] = useState(snippet.code);

  function handleEditorChange(value = "") {
    setCode(value);
  }

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <>
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

      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </>
  );
}
