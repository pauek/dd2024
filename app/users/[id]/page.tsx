import { loadUser } from "@/lib/users";
import Link from "next/link";
import React from "react";

type PageProps = {
  params: {
    id: string;
  };
};
export default async function Page({ params }: PageProps) {
  const user = await loadUser(Number(params.id));
  return (
    <div>
      <Link href="/users" className="text-blue-600">Go back</Link>
      <h1>
        {user.name.first} {user.name.last}
      </h1>
      <div>{user.email}</div>
    </div>
  );
}
