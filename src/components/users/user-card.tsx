'use client';

<<<<<<< HEAD
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";
import type {User} from "@prisma/client";

export default function UserCard({ user }: { user: User }) {
=======
import { redirect } from "next/navigation";

export default function UserCard({ user }: { user: IUser }) {
>>>>>>> 12cd4bea8082192963452b50594028ed6f646678
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
<<<<<<< HEAD
        <div className="font-bold text-xl mb-2 text-gray-50">{user.first_name}</div>
=======
        <div className="font-bold text-xl mb-2 text-gray-50">{user.name}</div>
>>>>>>> 12cd4bea8082192963452b50594028ed6f646678
        <p className="text-gray-200 text-base">{user.email}</p>
      </div>
    </button>
  );
}
