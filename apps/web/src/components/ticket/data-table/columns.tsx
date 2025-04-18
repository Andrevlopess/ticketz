"use client";

import { BadgeList } from "@/components/badges-list";
import AvatarTooltip, { UsersAvatars } from "@/components/ui/avatar-tooltip";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { priorities, statuses } from "./data";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { TicketPreviewDetails } from "@/schemas/ticket";

export const ticketsColumns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="w-[50px]">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="w-[50px]">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      </div>
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
      <div className="w-[60px] group">
      <Link
          href={`/tickets/${row.original.id}`}
          className="max-w-3xl truncate font-medium group-hover:underline"
        >
          {"#" + row.getValue("id")}
        </Link>
      </div>
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

      return (
        <div className="flex space-x-4">
          <Link href={`users/${creator.id}`}>
            <AvatarTooltip user={creator} />
          </Link>

          <div className="flex flex-col items-start space-y-1">
            <div className="flex space-x-2">
              {/* <p className="text-muted-foreground group-hover:text-secondary-foreground">{`#${row.original.id}`}</p> */}
              <BadgeList
                items={row.original.Tags}
                variant="outline"
                maxBadges={3}
              />
            </div>
            <span className="truncate font-medium max-w-[400px]">
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
    accessorKey: "solvers",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Solvers" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.id === row.original?.Status?.id
      );

      if (!status) {
        return null;
      }

      const solvers = row.original?.Solvers;

      return !!solvers?.length ? (
        <UsersAvatars users={solvers} />
      ) : (
        <span className="text-muted-foreground">Unassigned</span>
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
          {new Date(row.original.createdAt).toLocaleDateString("pt-br")}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
