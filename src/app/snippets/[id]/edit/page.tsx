import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function EditSnippetPage({ params }: PageProps) {
  const id = parseInt(params.id);

  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  async function submit(formData: FormData) {
    "use server";

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    await db.snippet.update({
      where: {
        id,
      },
      data: {
        title,
        code,
      },
    });
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
