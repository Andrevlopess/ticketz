import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
  GlobalSchema,
  Group,
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
import { eq, inArray, and, getTableColumns, notInArray } from 'drizzle-orm';
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

    // const isMemberOfCompany = this.db
    //   .select()
    //   .from(MemberShip)
    //   .innerJoin(Group, eq(Group.id, groupId))
    //   .where(
    //     and(
    //       notInArray(
    //         MemberShip.userId,
    //         users.map(({ id }) => id),
    //       ),
    //       eq(MemberShip.organizationId, groupId),
    //     ),
    //   );

    // if (!isMemberOfCompany)
    //   throw new BadRequestException(
    //     'User must be a member of the company to be assigned to this group.',
    //   );

    const insertedTags = this.db
      .insert(UsersOnGroup)
      .values(data)
      .onConflictDoNothing()
      .returning({
        userId: UsersOnGroup.userId,
      });

    return insertedTags;

    // a user must be of the company to be assigned to a group of this same company
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
