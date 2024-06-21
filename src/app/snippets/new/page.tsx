import { db } from "@/db";
import { redirect } from "next/navigation";

export default function NewSnippetPage() {
  async function createSnippet(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="asdf"></div>

      <div className="flex flex-col gap-4">
        <Input id="title" label="Title" />
        <Input id="code" label="Code" />

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
