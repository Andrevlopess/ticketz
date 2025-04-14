// import { Inject, Injectable } from '@nestjs/common';
// import {
//   GlobalSchema,
//   Tag,
//   TagInsert,
//   TagSelect,
//   TagsOnTicket,
//   Ticket,
//   User,
// } from '@ticketz/database';
// import { eq, inArray, and } from 'drizzle-orm';
// import { NodePgDatabase } from 'drizzle-orm/node-postgres';
// import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';

// @Injectable()
// export class TicketTagsService {
//   constructor(
//     @Inject(DrizzleAsyncProvider)
//     private db: NodePgDatabase<typeof GlobalSchema>,
//   ) {}

//   findMany(ticketId: number) {
//     const insertedTags = this.db
//       .select({
//         id: Tag.id,
//         name: Tag.name,
//       })
//       .from(TagsOnTicket)
//       .innerJoin(Tag, eq(Tag.id, TagsOnTicket.tagId))
//       .where(eq(TagsOnTicket.ticketId, ticketId));

//     return insertedTags;
//   }

//   add(ticketId: number, tags: TagSelect[]) {
//     const insertedTags = this.db
//       .insert(TagsOnTicket)
//       .values(tags.map((tag) => ({ tagId: tag.id, ticketId })))
//       .onConflictDoNothing()
//       .returning({
//         tagId: TagsOnTicket.tagId,
//       });

//     return insertedTags;
//   }

//     bulkRemove(ticketId: number, tags: TagSelect[]) {
//       const tagsIds = tags.map((tag) => tag.id);

//       const removedTags = this.db
//         .delete(TagsOnTicket)
//         .where(
//           and(
//             inArray(TagsOnTicket.tagId, tagsIds),
//             eq(TagsOnTicket.ticketId, ticketId),
//           ),
//         )
//         .returning();

//       return removedTags;
//     }

//   remove(ticketId: number, tagId: number) {
//     const removedTags = this.db
//       .delete(TagsOnTicket)
//       .where(
//         and(eq(TagsOnTicket.tagId, tagId), eq(TagsOnTicket.ticketId, ticketId)),
//       )
//       .returning();

//     return removedTags;
//   }
// }
