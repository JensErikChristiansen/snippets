"use client";

// import { db } from "@/db";
// import { redirect } from "next/navigation";
import { createSnippet } from "@/actions";
import { useFormState } from "react-dom";

export default function NewSnippetPage() {
  const [formState, dispatch] = useFormState(createSnippet, { message: "" });

  return (
    <form action={dispatch}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="asdf"></div>

      <div className="flex flex-col gap-4">
        <Input id="title" label="Title" />
        <Input id="code" label="Code" />

        {formState.message && (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
            {formState.message}
          </div>
        )}

        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}

function Input({ id, label }: { id: string; label: string }) {
  return (
    <div className="flex gap-4">
      <label htmlFor={id} className="w-12">
        {label}
      </label>

      <input id={id} name={id} className="border rounded p-2 w-full" />
    </div>
  );
}
