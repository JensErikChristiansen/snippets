"use client";

type PageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: PageProps) {
  return <div>{error.message}</div>;
}
