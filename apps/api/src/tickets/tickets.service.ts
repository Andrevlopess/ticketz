import { Inject, Injectable } from '@nestjs/common';
import { GlobalSchema, Ticket, TicketInsert } from '@ticketz/database';
import { and, eq, isNull } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';

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

  findAll() {
    return this.db
      .select()
      .from(Ticket)
      .where(isNull(Ticket.deletedAt))
      .orderBy(Ticket.createdAt);
  }

  async findOne(id: number) {
    // const [ticket] = await this.db
    //   .select()
    //   .from(Ticket)
    //   .where(and(eq(Ticket.id, id), isNull(Ticket.deletedAt)));

    //todo: add m-to-n relations
    const ticket = await this.db.query.Ticket.findFirst({
      columns: {
        organizationId: false,
        statusId: false,
        priorityId: false,
        groupId: false,
        categoryId: false,
        createdById: false,
      },
      with: {
        organization: {
          columns: {
            id: true,
            name: true,
          },
        },
        createdBy: {
          columns: {
            id: true,
            email: true,
          },
        },
        status: {
          columns: {
            id: true,
            name: true,
          },
        },
        group: {
          columns: {
            id: true,
            name: true,
          },
        },
        category: {
          columns: {
            id: true,
            name: true,
          },
        },
        priority: {
          columns: {
            id: true,
            name: true,
          },
        },
        // tags: {
        //   columns: {
        //     id: true,
        //     name: true,
        //   },
        // },
        // assignees: {
        //   columns:{
        //     assigneeId: true
        //   }
        // }

      },
      where: and(eq(Ticket.id, id), isNull(Ticket.deletedAt)),
    });

    return ticket;
  }

  update(id: number, updateTicketDto: any) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }
}
