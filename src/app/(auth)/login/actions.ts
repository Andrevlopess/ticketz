export async function getUsers(): Promise<any> {
  const users = await fetch("http://localhost:3000/api/users", {
    method: "GET",
  }).then((res) => res.json());
  return users;
}
