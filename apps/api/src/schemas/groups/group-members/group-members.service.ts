import {
  BadRequestException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { defineAbilityFor, groupSchema, userSchema } from '@ticketz/auth';
import {
  GlobalSchema,
  Group,
  GroupMembership,
  MemberShip,
  Organization,
  Profile,
  User,
  UserSelect,
} from '@ticketz/database';
import { log } from 'console';
import { and, eq, getTableColumns } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
// import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
// import { userSchema } from 'src/casl/models/user';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
// import { Action } from 'src/models/actions';
import { getUserPermissions } from 'src/utils/get-user-permissions';

@Injectable()
export class GroupMembersService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
    // private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  findMany(groupId: number, slug: string) {
    const { id, userId, createdAt, ...profileData } = getTableColumns(Profile);

    const groupMembers = this.db.transaction(async (trx) => {
      const [group] = await trx
        .select()
        .from(Group)
        .innerJoin(Organization, eq(Organization.id, Group.organizationId))
        .where(and(eq(Group.id, groupId), eq(Organization.slug, slug)));

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

    const [newMember] = await this.db
      .insert(GroupMembership)
      .values({ userId: user.id, groupId })
      .onConflictDoNothing()
      .returning({
        userId: GroupMembership.userId,
      });

    return newMember;
  }

  async remove(groupId: number, userId: number) {
    const removedMember = await this.db.transaction(async (trx) => {
      const [member] = await trx
        .select()
        .from(GroupMembership)
        .where(
          and(
            eq(GroupMembership.userId, userId),
            eq(GroupMembership.groupId, groupId),
          ),
        );

      if (!member)
        throw new NotFoundException(
          `User with id #${userId} not found in this group!`,
        );

      return await trx
        .delete(GroupMembership)
        .where(
          and(
            eq(GroupMembership.userId, userId),
            eq(GroupMembership.groupId, groupId),
          ),
        )
        .returning();
    });

    return removedMember;
  }
}
