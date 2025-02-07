
import { getUsers } from "@/app/(auth)/login/actions";
import { Suspense, use } from "react";
import UserCard from "./users/user-card";
import { Loader2 } from "lucide-react";

const UserList = ({ promise }: { promise: Promise<IUser[]> }) => {
  const users: IUser[] = use(promise);

  return (
  <div className="flex flex-col gap-2">
      {users.map((user) => <UserCard key={user.id} user={user} />)}
  </div>
  )
};

const UsersListContainer = ({promise}: {promise: Promise<IUser[]>}) => {
  return (
    <Suspense fallback={<Loader2 className="animate-spin text-white"/>}>
      <UserList promise={promise} />
    </Suspense>
  );
};

export default UsersListContainer;
