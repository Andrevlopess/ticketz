import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
  Category,
  GlobalSchema,
  Ticket,
  TicketInsert,
} from '@ticketz/database';
import { and, eq, isNull, sql } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { createUpdateSchema } from 'drizzle-zod';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { ZodException } from 'src/handlers/zod.exception';
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

  findAll() {
    const tickets = this.db.query.Ticket.findMany({
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
        assigneesOnTicket: {
          columns: {},
          with: {
            assigneeId: {
              columns: {
                id: true,
                email: true,
              },
            },
          },
        },
        tagsOnTicket: {
          columns: {},
          with: {
            tag: {
              columns: {
                id: true,
                name: true,
              },
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
      },
      where: isNull(Ticket.deletedAt),
    });

    return tickets;
  }

  async findOne(id: number) {
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
        assigneesOnTicket: {
          columns: {},
          with: {
            assigneeId: {
              columns: {
                id: true,
                email: true,
              },
            },
          },
        },
        tagsOnTicket: {
          columns: {},
          with: {
            tag: {
              columns: {
                id: true,
                name: true,
              },
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
      },
      where: and(eq(Ticket.id, id), isNull(Ticket.deletedAt)),
    });

    return ticket;
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
