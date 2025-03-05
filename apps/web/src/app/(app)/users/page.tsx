import { prisma } from "database";

export default async function Home() {
  
  const user = await prisma.user.findFirst({
    select: {
      name: true
    }
  })

  return (
    <div>
      {user?.name && <p>Hello from {user.name}</p>}
      {!user?.name && <p>No user has been added to the database yet. </p>}
    </div>
  );
}