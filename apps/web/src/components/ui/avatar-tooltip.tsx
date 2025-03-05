"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PublicUser } from "@/types/users";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface AvatarTooltipProps extends React.ComponentProps<typeof Avatar> {
  user: PublicUser;
}

export default function AvatarTooltip({ user, ...props }: AvatarTooltipProps) {
  const fallbackLetters = user.first_name[0] + user.last_name[0];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Avatar
          className="h-8 w-8 ring ring-background hover:z-20 hover:scale-110 transition-transform"
          {...props}
        >
          {user.photo && <AvatarImage src={user.photo} alt="" />}
          <AvatarFallback>{fallbackLetters.toUpperCase()}</AvatarFallback>
        </Avatar>
      </TooltipTrigger>
      <TooltipContent>
        <div className="flex justify-between">
          <p className="font-semibold text-primary-foreground">{`${user.first_name} ${user.last_name}`}</p>
          <ArrowUpRight className="text-primary-foreground translate-x-1" size={16} />
        </div>
        {/* todo: set the user group here */}
        <p className="text-primary-foreground">{`${user.email}`}</p>
      </TooltipContent>
    </Tooltip>
  );
}

interface UsersAvatarProps {
  users: PublicUser[];
  maxUsers?: number;
}

export function UsersAvatars({ users, maxUsers = 3 }: UsersAvatarProps) {
  return (
    <div className="flex -space-x-3">
      <TooltipProvider delayDuration={0}>
        {users.slice(0, 3).map((user, index) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <AvatarTooltip user={user} />
          </Link>
        ))}

        {users.length > maxUsers && (
          <Avatar className="h-8 w-8">
            <AvatarFallback>+{users.length - 3}</AvatarFallback>
          </Avatar>
        )}
      </TooltipProvider>
    </div>
  );
}
