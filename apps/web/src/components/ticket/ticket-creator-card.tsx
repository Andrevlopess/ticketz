import { ExternalLink, LinkIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { PublicUser } from "@/schemas/user";

interface TicketCreatorCardProps {
  creator: PublicUser;
}

export default function TicketCreatorCard({ creator }: TicketCreatorCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Creator</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="">
        <div className="flex space-x-4 items-center">
          <Avatar className="h-12 w-12 transition-transform">
            {/* {creator.photo && (
              <AvatarImage src={creator.photo} alt={creator.first_name} />
            )} */}
            <AvatarFallback>
              {`${creator.first_name[0].toUpperCase()} ${creator.last_name[0].toUpperCase()}`}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              {/* {creator.first_name} {creator.last_name} */}
              Anchieta
            </h3>

            <p className="text-muted-foreground mr-4">{creator.email}</p>
          </div>
        </div>

        <div className="mt-12 flex items-center">
          <p className="text-foreground mr-4 capitalize font-medium  tracking-tight ">
            Recent tickets
          </p>
          <Button variant="secondary" className="ml-auto">
            See More
            <ExternalLink />
          </Button>
        </div>

        <ol className="relative border-s mt-4">
          <li className="mb-8 ms-4 group">
            <Link href="tickets/12">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border bg-accent   group-hover:bg-primary transition-colors"></div>
              <div className="flex space-x-2 items-center mb-1">
                <small className="text-sm font-medium leading-none">#141</small>
                <Separator variant="dot" className="h-1.5 w-1.5" />
                <time className="text-sm font-normal leading-none text-muted-foreground">
                  February 2022
                </time>
                <LinkIcon className="text-muted-foreground" size={12} />
              </div>

              <h4 className="text-lg font-semibold">
                People stopped telling jokes
              </h4>
              <p className="leading-7 text-muted-foreground truncate">
                Get access to over 20+ pages including a dashboard layou pages.
              </p>
            </Link>
          </li>
          <li className="mb-8 ms-4 group">
            <Link href="tickets/12">
              <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border bg-accent   group-hover:bg-primary transition-colors"></div>
              <div className="flex space-x-2 items-center mb-1">
                <small className="text-sm font-medium leading-none">#141</small>
                <Separator variant="dot" className="h-1.5 w-1.5" />
                <time className="text-sm font-normal leading-none text-muted-foreground">
                  February 2022
                </time>
                <LinkIcon className="text-muted-foreground" size={12} />
              </div>

              <h4 className="text-lg font-semibold">
                People stopped telling jokes
              </h4>
              <p className="leading-7 text-muted-foreground truncate">
                Get access to over 20+ pages including a dashboard layou pages.
              </p>
            </Link>
          </li>
        </ol>
      </CardContent>
      <CardFooter>
        {/* <div>
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
            <Separator orientation="vertical" variant="dot" />
            <div>Source</div>
          </div>
        </div> */}
      </CardFooter>
    </Card>
  );
}
