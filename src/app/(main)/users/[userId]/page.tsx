
import UserDetailsContainer from "@/components/users/user-details";
import { getUser } from "./actions";

export default async function Page({ params }: { params: Promise<{ userId: string }> }) {
  
  const id = (await params).userId;
  const userPromise = getUser(id);
  
  return <UserDetailsContainer promise={userPromise} />;
}
