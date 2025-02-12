import UserCard from "@/components/users/user-card";
import { prisma } from "@/lib/prisma";
import type { User } from "@prisma/client";
import { redirect } from "next/navigation";

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
      <div className="p-6 bg-zinc-500">
        <p>sidebar</p>
      </div>

  );
}
