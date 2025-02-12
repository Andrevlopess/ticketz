<<<<<<< HEAD
import UserCard from "@/components/users/user-card";
import { prisma } from "@/lib/prisma";
import type { User } from "@prisma/client";

export default async function Page() {
  // const users = getUsers();

  // const newUser = await prisma.user.create({
  //   data: {
  //     email: 'andrellopes021@gmail.com',
  //     first_name: 'Andre',
  //     last_name: 'Lopes',
  //     password: 'teste'
  //   }
  // })

  const users: User[] = await prisma.user.findMany();

  console.log(users);

  return (
    <div className="flex min-h-svh">
      <div className="p-6 bg-zinc-500">
        <p>sidebar</p>
      </div>
      <div className="flex p-4">
        {/* <UsersListContainer promise={users} />
         */}
        {users.map((user) => {
          return <UserCard user={user} key={user.id} />;
        })}
      </div>
    </div>
  );
=======
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
>>>>>>> 12cd4bea8082192963452b50594028ed6f646678
}
