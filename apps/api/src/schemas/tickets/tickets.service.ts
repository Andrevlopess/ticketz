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
import { and, eq, getTableColumns, isNull, sql } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { createUpdateSchema } from 'drizzle-zod';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { ZodException } from 'src/handlers/zod.exception';
import {
  DetailedTicketSelect,
  TicketFieldsToInclude,
  TicketFieldsToIncludeSchema,
} from 'src/types/ticket';
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

  create(createTicketDto: TicketInsert) {
    const ticket = this.db.insert(Ticket).values(createTicketDto).returning();

    return ticket;
  }

  async findAll(orgSlug: string, include: string) {
    const includes = include.split(',') as TicketFieldsToInclude;

    const {
      data: includeKeys,
      success,
      error,
    } = TicketFieldsToIncludeSchema.safeParse(includes);

    if (!success) {
      throw new ZodException(error);
    }

    const { organizationId, ...ticket } = getTableColumns(Ticket);
    const { password, updatedAt, deletedAt, createdAt, ...user } =
      getTableColumns(User);
    const { name } = getTableColumns(Tag);

    // prettier-ignore
    const result = await this.db
      .select({
        ...getTableColumns(Ticket),
        tags: name,
        ...(includeKeys.includes('assignees') ? { assignees: user } : undefined),
        ...(includeKeys.includes('organization') ? { organization: getTableColumns(Organization) } : undefined),
      })
      .from(Ticket)
      .innerJoin(TagsOnTicket, eq(TagsOnTicket.ticketId, Ticket.id))
      .innerJoin(Tag, eq(Tag.id, TagsOnTicket.tagId))
      .innerJoin(TicketAssignments, eq(TicketAssignments.ticketId, Ticket.id))
      .innerJoin(User, eq(User.id, TicketAssignments.assigneeId))
      .innerJoin(Organization, eq(Organization.id, Ticket.organizationId))
      .where(eq(Organization.slug, orgSlug));

    console.log(result);

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
      if (row.assignees && !ticket.assignees.some((assignee: any) => assignee.id === row.assignees?.id)) {
        ticket.assignees.push(row.assignees);
      }
    }

    return tickets;
  }

  async findOne(ticketId: number, orgSlug: string, include?: string) {

    const includes = include?.split(',') as TicketFieldsToInclude;

    const {
      data: includeKeys,
      success,
      error,
    } = TicketFieldsToIncludeSchema.safeParse(includes);

    if (!success) {
      throw new ZodException(error);
    }

    const { organizationId, ...ticket } = getTableColumns(Ticket);
    const { password, updatedAt, deletedAt, createdAt, ...user } =
      getTableColumns(User);
    const { name } = getTableColumns(Tag);

    // prettier-ignore
    const result = await this.db
      .select({
        ...getTableColumns(Ticket),
        tags: name,
        ...(includeKeys.includes('assignees') ? { assignees: user } : undefined),
        ...(includeKeys.includes('organization') ? { organization: getTableColumns(Organization) } : undefined),
      })
      .from(Ticket)
      .innerJoin(TagsOnTicket, eq(TagsOnTicket.ticketId, Ticket.id))
      .innerJoin(Tag, eq(Tag.id, TagsOnTicket.tagId))
      .innerJoin(TicketAssignments, eq(TicketAssignments.ticketId, Ticket.id))
      .innerJoin(User, eq(User.id, TicketAssignments.assigneeId))
      .innerJoin(Organization, eq(Organization.id, Ticket.organizationId))
      .where(
        and(
          eq(Organization.slug, orgSlug), 
          eq(Ticket.id, ticketId))
        );

    console.log(result);

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
      if (row.assignees && !ticket.assignees.some((assignee: any) => assignee.id === row.assignees?.id)) {
        ticket.assignees.push(row.assignees);
      }
    }

    return tickets;
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
