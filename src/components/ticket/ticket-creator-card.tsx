import { PublicUser } from "@/types/users";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Separator } from "../ui/separator";

interface TicketCreatorCardProps {
  creator: PublicUser;
}

export default function TicketCreatorCard({ creator }: TicketCreatorCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 items-start mt-4">
          <Avatar className="h-12 w-12 transition-transform">
            {creator.photo && (
              <AvatarImage src={creator.photo} alt={creator.first_name} />
            )}
            <AvatarFallback>
              {`${creator.first_name[0].toUpperCase()}
        ${creator.last_name[0].toUpperCase()}`}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-foreground mr-4 capitalize font-medium  tracking-tight">
              {creator.first_name} {creator.last_name}
            </p>
            <p className="text-muted-foreground mr-4">{creator.email}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">
              Radix Primitives
            </h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" variant="dot"/>
            <div>Source</div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
