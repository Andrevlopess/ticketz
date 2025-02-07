import UsersListContainer from "@/components/UsersList";
import { getUsers } from "./actions";

export default function Page() {
  const users = getUsers();

  return (
    <div className="flex min-h-svh">
      <div className="p-6 bg-zinc-500">
        <p>sidebar</p>
      </div>
      <div className="flex p-4">
        <UsersListContainer promise={users} />
      </div>
    </div>
  );
}
