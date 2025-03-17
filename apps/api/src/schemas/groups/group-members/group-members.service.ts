import { Inject, Injectable } from '@nestjs/common';
import {
  GlobalSchema,
  MemberShip,
  Profile,
  Tag,
  TagInsert,
  TagSelect,
  TagsOnTicket,
  Ticket,
  User,
  UserSelect,
  UsersOnGroup,
} from '@ticketz/database';
import { eq, inArray, and, getTableColumns } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';

@Injectable()
export class GroupMembersService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  findMany(groupId: number) {

    const { id, userId, updatedAt, createdAt, deletedAt, ...profileData } =
      getTableColumns(Profile);

    const insertedTags = this.db
      .select({
        id: User.id,
        name: User.email,
        ...profileData,
      })
      .from(UsersOnGroup)
      .innerJoin(User, eq(User.id, UsersOnGroup.userId))
      .innerJoin(Profile, eq(Profile.userId, User.id))
      .where(eq(UsersOnGroup.groupId, groupId));

    return insertedTags;
  }

  add(groupId: number, users: Pick<UserSelect, 'id'>[]) {
    const data = users.map((user) => ({ userId: user.id, groupId }));

    const insertedTags = this.db
      .insert(UsersOnGroup)
      .values(data)
      .onConflictDoNothing()
      .returning({
        userId: UsersOnGroup.userId,
      });

    return insertedTags;
  }

  // bulkRemove(ticketId: number, tags: TagSelect[]) {
  //   const tagsIds = tags.map((tag) => tag.id);

  //   const removedTags = this.db
  //     .delete(TagsOnTicket)
  //     .where(
  //       and(
  //         inArray(TagsOnTicket.tagId, tagsIds),
  //         eq(TagsOnTicket.ticketId, ticketId),
  //       ),
  //     )
  //     .returning();

  //   return removedTags;
  // }

  remove(groupId: number, userId: number) {
    const removedMembers = this.db
      .delete(UsersOnGroup)
      .where(
        and(eq(UsersOnGroup.userId, userId), eq(UsersOnGroup.groupId, groupId)),
      )
      .returning();

    return removedMembers;
  }
}
