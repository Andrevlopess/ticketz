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
}
