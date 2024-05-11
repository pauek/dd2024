import User from "@/components/User";
import { loadUsers } from "@/lib/users";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const users = await loadUsers();
  return (
    <div className="flex flex-col gap-2 w-fit">
      <Link href="/">Back Home</Link>
      {users.map((user: any, index: number) => (
        <Link key={user.email} href={`/users/${index}`}>
          <User
            fullName={`${user.name.first} ${user.name.last}`}
            email={user.email}
            avatar={user.picture.medium}
          />
        </Link>
      ))}
    </div>
  );
}
