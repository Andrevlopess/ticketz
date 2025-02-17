"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { TicketWithDetails } from "@/types/ticket";
import { ColumnDef } from "@tanstack/react-table";
import { priorities, statuses } from "./data";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const ticketsColumns: ColumnDef<TicketWithDetails>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ticket" />
    ),
    cell: ({ row }) => (
      <div className="w-[70px]">{"#" + row.getValue("id")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "subject",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subject" />
    ),
    cell: ({ row }) => {
      const creator = row.original.Creator;

      const fallbackLetter = creator.first_name[0] + creator.last_name[0];

      
      return (
        <div className="flex space-x-2">
          {/* <Badge variant="outline">Subject</Badge> */}
          <Avatar className="h-8 w-8">
            {row.original.Creator.photo && (
              <AvatarImage src={row.original.Creator.photo} alt="@shadcn" />
            )}
            <AvatarFallback>{fallbackLetter.toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">

          <span className="max-w-[400px] truncate font-medium">
            {row.getValue("subject")}
          </span>
          <span className="max-w-[400px] truncate font-medium">
            {row.getValue("subject")}
          </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      if (!row.original.Priority) {
        return null;
      }
      const priority = priorities.find(
        (priority) => priority.id === row.original?.Priority?.id
      );

      if (!priority) {
        return null;
      }

      return (
        <div className="flex items-center">
          {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{priority.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.id === row.original?.Status?.id
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "Created at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      return (
        <div className="">
          {row.original.createdAt.toLocaleDateString("pt-br")}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
