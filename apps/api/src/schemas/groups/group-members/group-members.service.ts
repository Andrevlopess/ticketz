import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  GlobalSchema,
  Group,
  GroupMembership,
  MemberShip,
  Profile,
  User,
  UserSelect,
} from '@ticketz/database';
import { and, eq, getTableColumns } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';

@Injectable()
export class GroupMembersService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  findMany(groupId: number, orgId: number) {
    const { id, userId, createdAt, ...profileData } = getTableColumns(Profile);

    const groupMembers = this.db.transaction(async (trx) => {
      const [group] = await trx
        .select()
        .from(Group)
        .where(and(eq(Group.id, groupId), eq(Group.organizationId, orgId)));

      if (!group)
        throw new NotFoundException(`Group with id #${groupId} not found!`);

      return this.db
        .select({
          id: User.id,
          name: User.email,
          ...profileData,
        })
        .from(GroupMembership)
        .innerJoin(User, eq(User.id, GroupMembership.userId))
        .innerJoin(Profile, eq(Profile.userId, User.id))
        .where(eq(GroupMembership.groupId, groupId));
    });

    return groupMembers;
  }

  async add(userId: number, groupId: number, user: Pick<UserSelect, 'id'>) {
    const [canCreateGroup] = await this.db
      .select()
      .from(GroupMembership)
      .where(
        and(
          eq(GroupMembership.userId, userId),
          eq(GroupMembership.groupId, groupId),
          eq(GroupMembership.role, 'GROUP_MANAGER'),
        ),
      );

    if (!canCreateGroup) {
      throw new ForbiddenException(
        'You are not allowed to add members to this group.',
      );
    }

    const [alreadyExists] = await this.db
      .select()
      .from(GroupMembership)
      .where(
        and(
          eq(GroupMembership.userId, user.id),
          eq(GroupMembership.groupId, groupId),
        ),
      );

    if (alreadyExists)
      throw new BadRequestException('This user is already on this group.');

    const [isMemberOfCompany] = await this.db
      .select()
      .from(Group)
      .innerJoin(
        MemberShip,
        eq(MemberShip.organizationId, Group.organizationId),
      )
      .where(and(eq(MemberShip.userId, user.id), eq(Group.id, groupId)));

    if (!isMemberOfCompany)
      throw new BadRequestException(
        'User must be a member of the company to be assigned to this group.',
      );

    const insertedTags = this.db
      .insert(GroupMembership)
      .values({ userId: user.id, groupId })
      .onConflictDoNothing()
      .returning({
        userId: GroupMembership.userId,
      });

    return insertedTags;

    // a user must be of the company to be assigned to a group of this same company
  }

  async remove(requesterId:number, groupId: number, userId: number) {
    const [canCreateGroup] = await this.db
      .select()
      .from(GroupMembership)
      .where(
        and(
          eq(GroupMembership.userId, requesterId),
          eq(GroupMembership.groupId, groupId),
          eq(GroupMembership.role, 'GROUP_MANAGER'),
        ),
      );

    console.log(userId, groupId, canCreateGroup);

    if (!canCreateGroup) {
      throw new ForbiddenException(
        'You are not allowed to add members to this group.',
      );
    }

    const removedMembers = this.db
      .delete(GroupMembership)
      .where(
        and(
          eq(GroupMembership.userId, userId),
          eq(GroupMembership.groupId, groupId),
        ),
      )
      .returning();

    return removedMembers;
  }
}
