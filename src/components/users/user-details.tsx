"use client";

import type { User } from "@prisma/client";


export default function UserDetailsView({user}: {user: User}) {
  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-xl font-bold">{user.first_name}</h1>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
}
