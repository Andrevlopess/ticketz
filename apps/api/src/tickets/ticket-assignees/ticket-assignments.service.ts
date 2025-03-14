import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  GlobalSchema,
  Tag,
  TagSelect,
  TagsOnTicket,
  Ticket,
  TicketAssignments,
  User,
} from '@ticketz/database';
import { and, eq, inArray } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { AssignTicketPayload } from './ticket-assignments.controller';
import { createUpdateSchema } from 'drizzle-zod';
import { ZodException } from 'src/handlers/zod.exception';
import z from 'zod';
import { aliasedTable } from 'drizzle-orm';

@Injectable()
export class TicketAssignmentsService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  findMany(ticketId: number) {

    const Assigner = aliasedTable(User, 'Assigner');
    const ticketAssigments = this.db
      .select({
        assignee: {
          id: User.id,
          email: User.email,
          assignedAt: TicketAssignments.createdAt,
        },
        assigner: {
          id: Assigner.id,
          email: Assigner.email,
        },
      })
      .from(TicketAssignments)
      .innerJoin(User, eq(TicketAssignments.assigneeId, User.id))
      .innerJoin(Assigner, eq(TicketAssignments.assignerId, Assigner.id))
      .where(eq(TicketAssignments.ticketId, ticketId));

    if (!ticketAssigments) throw new NotFoundException();

    return ticketAssigments;
  }

  async add(
    ticketId: number,
    assignerId: number,
    assignees: AssignTicketPayload,
  ) {
    if (!assignees || !assignees.length)
      throw new BadRequestException('You must provide at least one assignee!');

    const data = assignees.map((assignee) => ({
      assigneeId: assignee.assigneeId,
      ticketId,
      assignerId,
    }));

    const schema = createUpdateSchema(TicketAssignments);
    const parsed = z.array(schema).safeParse(data);

    // return parsed.error
    if (!parsed.success) throw new ZodException(parsed.error);

    try {
      //check if ticket exists
      const ticketExists = await this.db
        .select()
        .from(Ticket)
        .where(eq(Ticket.id, ticketId))
        .limit(1);

      if (!ticketExists)
        throw new NotFoundException(`Ticket #${ticketId} not found!`);

      //check if assignees exists
      const assigneesIds = assignees.map(({ assigneeId }) => assigneeId);
      const users = await this.db
        .select({ assigneeId: User.id })
        .from(User)
        .where(inArray(User.id, assigneesIds));

      const validAssigneeIds = new Set(
        users.map(({ assigneeId }) => assigneeId),
      );

      const invalidAssigneeIds = assigneesIds.filter(
        (assigneeId) => !validAssigneeIds.has(assigneeId),
      );

      if (invalidAssigneeIds.length) {
        throw new BadRequestException(
          `Invalid assignee IDs: ${invalidAssigneeIds.join(', ')}`,
        );
      }

      const alreadyAssigned = await this.db
        .select({
          id: TicketAssignments.assigneeId,
        })
        .from(TicketAssignments)
        .where(
          and(
            inArray(TicketAssignments.assigneeId, assigneesIds),
            eq(TicketAssignments.ticketId, ticketId),
          ),
        );

      if (alreadyAssigned.length)
        throw new BadRequestException(
          `The user(s) #${alreadyAssigned.map(({ id }) => id).join(', ')} is already assigned to this ticket!`,
        );

      return await this.db.insert(TicketAssignments).values(data).returning();
    } catch (error) {
      throw error;
    }
  }

  bulkRemove(ticketId: number, tags: TagSelect[]) {
    const tagsIds = tags.map((tag) => tag.id);

    return this.db
      .delete(TagsOnTicket)
      .where(
        and(
          inArray(TagsOnTicket.tagId, tagsIds),
          eq(TagsOnTicket.ticketId, ticketId),
        ),
      )
      .returning();
  }

  remove(ticketId: number, assigneeId: number) {
    return this.db
      .delete(TicketAssignments)
      .where(
        and(
          eq(TicketAssignments.assigneeId, assigneeId),
          eq(TicketAssignments.ticketId, ticketId),
        ),
      )
      .returning();
  }
}
