"use client"

import fetchTags from "@/actions/tags";
import { useDebounce } from "@/hooks/use-debounce";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ConnectOrCreateOption } from "@/schemas/ticket";
import { Plus, PlusCircle } from "lucide-react";
import { ScrollArea } from "./scroll-area";
import { useForm } from "react-hook-form";
import { z, ZodError } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import fetchTicketAvaliableTags from "@/actions/tags";


const TagTextSchema =
  z.string()
    .min(1, 'Enter at least 1 character').
    max(20, 'Maximum characters exceded (The limit is 20)')

//TODO: add scrollarea to cmdk commandList

interface TagsSelectorProps {
  onSelect: (data: ConnectOrCreateOption) => void;
  ticketId?: number
}

export default function TagsSelector({
  ticketId,
  onSelect,
}: TagsSelectorProps) {
  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<ZodError | null>(null)

  const debouncedSearch = useDebounce(search, 500).trim();

  const { data: tags, isLoading: isPending, error: fetchError } = useQuery({
    queryKey: ["tags", { ticketId, search: debouncedSearch }],
    queryFn: () => fetchTicketAvaliableTags(debouncedSearch,ticketId),
    enabled: !!debouncedSearch
  });

  const handleSubmitNewTag = () => {

    const parsed = TagTextSchema.safeParse(debouncedSearch)

    if (!parsed.success) {
      setErrors(parsed.error)
      return;
    }

    onSelect({ name: parsed.data });
    setOpen(false);
    setSearch('');
  }

  console.log(errors);


  return (
    <div className="flex items-center space-x-4">
      {/* <p className="text-sm text-muted-foreground">Status</p> */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="">
            <PlusCircle />
            {/* {selectedStatus ? <>{selectedStatus.label}</> : <>+ Set status</>} */}
            Add tags
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command shouldFilter={false}>
            <CommandInput
              value={search}

              onValueChange={setSearch}
              placeholder="Search for a tag..." />
            <CommandList>




              {/* ta carregando */}
              {isPending && <CommandLoading />}

              {/* nao ta carregando e tem resultados */}

              {!isPending && tags && tags.length > 0 && (
                <CommandGroup>
                  {tags.map((status) => (
                    <CommandItem
                      key={status.id}
                      value={status.id.toString()}
                      onSelect={(value) => {
                        const selected =
                          tags.find((priority) => priority.id.toString() === value) || {
                            name: debouncedSearch,
                          };

                        onSelect(selected);
                        setOpen(false);
                        setSearch('');
                      }}
                    >
                      {status.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {/*  nao ta carregando, nao tem resultados, mas tem pesquisa (criar novo) */}
              {!isPending && tags && tags.length === 0 && debouncedSearch && (
                <div className="flex p-2 flex-col">

                  {errors && errors.issues.map(error =>
                    <p key={error.message} className="text-[0.8rem] font-medium text-destructive mb-2">{error.message}</p>
                  )}

                  <Button
                    onClick={handleSubmitNewTag}
                    className="w-full"
                    size="sm"
                    variant="secondary"
                  >
                    <PlusCircle />
                    <span className="truncate">
                      Create tag for "{debouncedSearch}"
                    </span>
                  </Button>
                </div>
              )}

              {/* nao ta carregando nem tem pesquisa (iniial) */}
              {!isPending && !debouncedSearch && <CommandEmpty>Search for tags</CommandEmpty>}
              {fetchError &&
                <CommandEmpty className="text-[0.8rem] font-medium text-destructive text-center p-6">{fetchError?.message}</CommandEmpty>}


            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div >
  );
}
