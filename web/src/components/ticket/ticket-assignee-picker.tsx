'use client'

import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from "@/components/ui/command"
import { Group } from "@/schemas/ticket"
import { PublicUser } from "@/schemas/user"
import React, { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { DialogTitle } from "../ui/dialog"


interface TicketAssigneePickerProps {
  groups: {
    group: Group,
    users: PublicUser[]
  }[],
  onSelect: (user: PublicUser) => void
}

export function TicketAssigneePicker({ onSelect, groups }: TicketAssigneePickerProps) {

  const [open, setOpen] = useState(true)


  const runCommand = React.useCallback((user: PublicUser, onSelect: (user: PublicUser) => void) => {
    setOpen(false);
    onSelect(user);
  }, []);


  return (
    <>
      <Button type="button" onClick={() => setOpen(prev => !prev)}>
        Open command
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex p-4 pb-2 bg-background gap-4 ">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Assignees
          </h3>
          {/* <TagsSelector onSelect={() => { }} ticketId={12} /> */}
          {/* <span className="text-xl font-medium tracking-tight">
            IT Department
            <Button variant='ghost' size="icon">
              <ChevronDown/>
            </Button>
          </span> */}
        </div>

        <DialogTitle className="sr-only">Search for an user to assign</DialogTitle>
        <CommandInput placeholder="Type for a user of this group..." />

        <CommandList>

          <CommandEmpty>No results found.</CommandEmpty>

          {groups.map(group => (
            <React.Fragment key={group.group.id}>
              <CommandGroup>
                {group.users.map(user => (
                  <CommandItem key={user.email} onSelect={() => runCommand(user, onSelect)}>

                    <div className="flex gap-4 flex-1">
                      <Avatar>
                        <AvatarFallback>'RF'</AvatarFallback>
                        <AvatarImage src={user.photo ?? undefined} />
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-mg leading-tight font-medium">{user.first_name}{user.last_name}</span>
                        <span className="text-muted-foreground">@{user.email}</span>
                      </div>
                      <Button className="ml-auto" variant='outline'>
                        <PlusCircle size={18} />
                        Assign
                      </Button>
                    </div>

                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </React.Fragment>

          ))}

        </CommandList>
      </CommandDialog>
    </>

  )
}
