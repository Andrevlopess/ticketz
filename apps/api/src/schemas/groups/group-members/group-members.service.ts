import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  GlobalSchema,
  Group,
  GroupMembership,
  MemberShip,
  Organization,
  User,
} from '@ticketz/database';
import { and, asc, eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
// import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
// import { userSchema } from 'src/casl/models/user';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
// import { Action } from 'src/models/actions';

@Injectable()
export class GroupMembersService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
    // private caslAbilityFactory: CaslAbilityFactory,
  ) {}

  findMany(groupId: number, slug: string) {
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
          email: User.email,
          role: GroupMembership.role,
        })
        .from(GroupMembership)
        .innerJoin(User, eq(User.id, GroupMembership.userId))
        .where(eq(GroupMembership.groupId, groupId))
        .orderBy(asc(GroupMembership.userId), asc(GroupMembership.role));
    });

    return groupMembers;
  }

  async add(groupId: number, userId: number, orgSlug: string) {
    /* Steps to check:
     *  Check if group exists on the provided organization;
     *  Check if user is already a member of the group;
     *  Check if user is a member of the organization of the group;
     */

    const [group] = await this.db
      .select()
      .from(Group)
      .innerJoin(Organization, eq(Organization.id, Group.organizationId))
      .where(and(eq(Group.id, groupId), eq(Organization.slug, orgSlug)));

    if (!group)
      throw new NotFoundException(`Group with id #${groupId} not found!`);

    const [alreadyExists] = await this.db
      .select()
      .from(GroupMembership)
      .where(
        and(
          eq(GroupMembership.userId, userId),
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
      .innerJoin(Organization, eq(Organization.id, Group.organizationId))
      .where(
        and(
          eq(MemberShip.userId, userId),
          eq(Group.id, groupId),
          eq(Organization.slug, orgSlug),
        ),
      );

    if (!isMemberOfCompany)
      throw new BadRequestException(
        'User is not a member of the company of this group!',
      );


    const [newMember] = await this.db
      .insert(GroupMembership)
      .values({ userId: userId, groupId })
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
