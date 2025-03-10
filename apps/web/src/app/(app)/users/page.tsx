import { prisma } from "@/lib/prisma";

export default async function Home() {
  
  const user = await prisma.user.findFirst({
    select: {
      id: true
    }
  })

  return (
    <div>
      {user?.id && <p>Hello from {user.id}</p>}
      {!user?.id && <p>No user has been added to the database yet. </p>}
    </div>
  );
}