'use client';

import type { User } from "@prisma/client";
import { redirect } from "next/navigation";

export default function UserCard({ user }: { user: User  }) {
  return (
    <button
    
    onClick={() => redirect(`/users/${user.id}`)}
    className="rounded overflow-hidden shadow-lg p-4 bg-zinc-800">
      {/* <img
        className="w-full h-48 object-cover"
        src={user.avatar}
        alt={user.name}
      /> */}
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2 text-gray-50">{user.id}</div>
        <p className="text-gray-200 text-base">{user.email}</p>
      </div>
    </button>
  );
}
