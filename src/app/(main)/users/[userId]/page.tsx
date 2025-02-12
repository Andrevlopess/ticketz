<<<<<<< HEAD
import UserDetailsView from "@/components/users/user-details";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ userId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = (await params).userId;
  console.log("userIdDDDD", id);

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user) {
    return {
      title: "Usuário não encontrado",
      
    };
  }

  return {
    title: `User ${user?.id}`,
  };
}

export default async function Page({ params }: Props) {
  const id = (await params).userId;

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user) {
    return notFound();
  }

  return (
    <>
      <h5>{id}</h5>
      <UserDetailsView user={user} />
    </>
  );
=======

import UserDetailsContainer from "@/components/users/user-details";
import { getUser } from "./actions";

export default async function Page({ params }: { params: Promise<{ userId: string }> }) {
  
  const id = (await params).userId;
  const userPromise = getUser(id);
  
  return <UserDetailsContainer promise={userPromise} />;
>>>>>>> 12cd4bea8082192963452b50594028ed6f646678
}
