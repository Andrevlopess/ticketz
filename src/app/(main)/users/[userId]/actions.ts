export async function getUser(userId: string) {
  const user = await fetch(`http://localhost:3000/api/users/${userId}`, {
    method: "GET",
  }).then((res) => res.json());
  return user as IUser;
}
