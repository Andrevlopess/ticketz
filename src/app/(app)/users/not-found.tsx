import { UserRoundX } from "lucide-react";

export default function NotFoundPag() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h4>Usuário não encontrado</h4>
      <UserRoundX className="animate-pulse" />
    </div>
  );
}
