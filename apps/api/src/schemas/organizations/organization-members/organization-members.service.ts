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
} from '@ticketz/database';
import { eq, inArray, and, getTableColumns } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';

@Injectable()
export class OrganizationMembersService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  findMany(organizationId: number) {

    const { id, userId, updatedAt, createdAt, deletedAt, ...profileData } =
      getTableColumns(Profile);

    const insertedTags = this.db
      .select({
        id: User.id,
        name: User.email,
        ...profileData,
      })
      .from(MemberShip)
      .innerJoin(User, eq(User.id, MemberShip.userId))
      .innerJoin(Profile, eq(Profile.userId, User.id))
      .where(eq(MemberShip.organizationId, organizationId));

    return insertedTags;
  }

  add(organizationId: number, users: Pick<UserSelect, 'id'>[]) {
    const data = users.map((user) => ({ userId: user.id, organizationId }));

    const insertedTags = this.db
      .insert(MemberShip)
      .values(data)
      .onConflictDoNothing()
      .returning({
        userId: MemberShip.userId,
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

  remove(organizationId: number, userId: number) {
    const removedMembers = this.db
      .delete(MemberShip)
      .where(
        and(eq(MemberShip.userId, userId), eq(MemberShip.organizationId, organizationId)),
      )
      .returning();

    return removedMembers;
  }
}
