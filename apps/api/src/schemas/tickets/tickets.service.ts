import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
  GlobalSchema,
  Organization,
  Tag,
  TagsOnTicket,
  Ticket,
  TicketAssignments,
  TicketInsert,
  User,
} from '@ticketz/database';
import { aliasedTable, and, eq, getTableColumns, sql } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { QueryBuilder } from 'drizzle-orm/pg-core';
import { createInsertSchema, createUpdateSchema } from 'drizzle-zod';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { ZodException } from 'src/handlers/zod.exception';
import {
  DetailedTicketSelect,
  TicketFieldsToInclude,
  TicketFieldsToIncludeSchema,
} from 'src/types/ticket';
import selectTableColumns from 'src/utils/select-table-columns';
import { z } from 'zod';

// User is not allowed to update the email
const TicketUpdateSchema = createUpdateSchema(Ticket)
  // .omit({ email: true })
  .strict();

export type TicketUpdate = z.infer<typeof TicketUpdateSchema>;

@Injectable()
export class TicketsService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  async create(createTicketDto: TicketInsert, slug: string) {
    const parsed = createInsertSchema(Ticket)
      .omit({ organizationId: true })
      .safeParse(createTicketDto);

    if (!parsed.success) throw new ZodException(parsed.error);

    //     const [group] = await this.db.transaction(async (trx) => {
    //       const [alreadyExists] = await trx
    //         .select()
    //         .from(Group)
    //         .where(
    //           and(
    //             eq(Group.name, createGroupDto.name),
    //             eq(Group.organizationId, createGroupDto.organizationId),
    //           ),
    //         );

    //       if (alreadyExists)
    //         throw new BadRequestException(
    //           `Group '${createGroupDto.name}' already exists!`,
    //         );

    //       return trx.insert(Group).values(createGroupDto).returning();
    //     });

    //     return group;

    // const db = new QueryBuilder();

    const orgId = await this.db
      .select()
      .from(Organization)
      .where(eq(Organization.slug, slug))
      .limit(1);

    if (!orgId[0]) {
      throw new BadRequestException(
        `Organization with slug '${slug}' not found`,
      );
    }

    const ticket = await this.db
      .insert(Ticket)
      .values({
        ...parsed.data,
        organizationId: orgId[0].id,
      })
      .returning();
    return ticket;
    // return 'faz o eli';
  }

  async find(orgSlug: string, include: string, ticketId?: number) {
    const includes = include?.split(',') as TicketFieldsToInclude;

    const {
      data: includeKeys,
      success,
      error,
    } = TicketFieldsToIncludeSchema.safeParse(includes);

    if (!success) {
      throw new ZodException(error);
    }

    const Creator = aliasedTable(User, 'Creator');

    const { organizationId, createdById, ...ticket } = getTableColumns(Ticket);

    // prettier-ignore
    const user = selectTableColumns(User, [ 'id', 'name', 'email', 'jobTitle', 'photoUrl', 'phone']);
    // prettier-ignore
    const creator = selectTableColumns(Creator, [ 'id', 'name', 'email', 'jobTitle', 'photoUrl', 'phone']);
    // prettier-ignore
    const organization = selectTableColumns(Organization, [ 'id', 'name', 'logoUrl', 'description']);

    // prettier-ignore
    const query = this.db
      .select({
        ...ticket,
        tags: Tag.name,
        ...(includeKeys.includes('creator') ? { creator: creator } : undefined),
        ...(includeKeys.includes('assignees') ? { assignees: user } : undefined),
        ...(includeKeys.includes('organization') ? { organization: organization } : undefined),
      })
      .from(Ticket)
      .innerJoin(TagsOnTicket, eq(TagsOnTicket.ticketId, Ticket.id))
      .innerJoin(Tag, eq(Tag.id, TagsOnTicket.tagId))
      .innerJoin(Organization, eq(Organization.id, Ticket.organizationId))
      .where(
        and(
          eq(Organization.slug, orgSlug),
          ticketId ? eq(Ticket.id, ticketId) : undefined,
        ),
      );

    if (includeKeys.includes('assignees')) {
      query
        .innerJoin(TicketAssignments, eq(TicketAssignments.ticketId, Ticket.id))
        .innerJoin(User, eq(User.id, TicketAssignments.assigneeId));
    }

    if (includeKeys.includes('creator')) {
      query.innerJoin(Creator, eq(Creator.id, Ticket.createdById));
    }
    const result = await query;

    const tickets: DetailedTicketSelect[] = [];
    const map = new Map();

    for (const row of result) {
      let ticket = map.get(row.id);

      // prettier-ignore
      if (!ticket) {
        ticket = {
          ...row,
          tags: [],
          ...(includeKeys.includes('assignees') ? { assignees: [] } : undefined),
        };

        map.set(row.id, ticket);
        tickets.push(ticket);
      }

      if (row.tags && !ticket.tags.some((tag: string) => tag === row.tags)) {
        ticket.tags.push(row.tags);
      }

      // prettier-ignore
      if (row.assignees && !ticket.assignees.some((assignee: typeof user) => +assignee.id === row.assignees?.id)) {
        ticket.assignees.push(row.assignees);
      }
    }

    return ticketId ? tickets[0] : tickets;
  }

  update(id: number, updateTicketDto: TicketUpdate) {
    try {
      const parsed = TicketUpdateSchema.safeParse(updateTicketDto);

      if (!parsed.success) throw new ZodException(parsed.error);

      return this.db
        .update(Ticket)
        .set({
          ...updateTicketDto,
          updatedAt: sql`now()`,
        })
        .where(eq(Ticket.id, id))
        .returning();
    } catch (error: any) {
      if (error.code === '250503') {
        throw new BadRequestException('Check if the provided ids exists.');
      }
    }
  }

  remove(id: number) {
    return this.db
      .update(Ticket)
      .set({ deletedAt: new Date() })
      .where(eq(Ticket.id, id))
      .returning();
  }
}
