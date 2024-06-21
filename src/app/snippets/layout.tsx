import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container m-4 px-12 flex flex-col gap-4">
      <Link href="/" className="self-start border p-2 border-rounded">
        Back
      </Link>
      {children}
    </div>
  );
}
