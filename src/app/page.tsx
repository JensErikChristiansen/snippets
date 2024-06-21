import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const data = await db.snippet.findMany();

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href="/snippets/new" className="border p-2 border-rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {data.map((s) => (
          <Link
            key={s.id}
            href={`/snippets/${s.id}`}
            className="flex justify-between items-center p-2 border rounded"
          >
            <div>{s.title}</div>
            <div>View</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
