import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  GlobalSchema,
  MemberShip,
  Organization,
  Profile,
  User,
  UserSelect,
} from '@ticketz/database';
import { and, eq, getTableColumns } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';

@Injectable()
export class MembersService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  findMany(slug: string) {
    const { id, userId, createdAt, ...profileData } = getTableColumns(Profile);

    const insertedTags = this.db
      .select({
        id: User.id,
        name: User.email,
        ...profileData,
      })
      .from(MemberShip)
      .innerJoin(User, and(eq(User.id, MemberShip.userId)))
      .innerJoin(Profile, eq(Profile.userId, User.id))
      .innerJoin(Organization, eq(Organization.id, MemberShip.organizationId))
      .where(eq(Organization.slug, slug));

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

  async findOne(memberId: number, slug: string) {
    const {
      id,
      userId: profileUserId,

      createdAt,

      ...profileData
    } = getTableColumns(Profile);

    const [user] = await this.db
      .select({
        id: User.id,
        name: User.email,
        ...profileData,
      })
      .from(MemberShip)
      .innerJoin(User, and(eq(User.id, MemberShip.userId)))
      .innerJoin(Profile, eq(Profile.userId, User.id))
      .innerJoin(Organization, eq(Organization.id, MemberShip.organizationId))
      .where(and(eq(Organization.slug, slug), eq(MemberShip.userId, memberId)));

    if (!user) throw new NotFoundException(`User #${memberId} not found!`);
    return user;
  }

  remove(organizationId: number, userId: number) {
    const removedMembers = this.db
      .delete(MemberShip)
      .where(
        and(
          eq(MemberShip.userId, userId),
          eq(MemberShip.organizationId, organizationId),
        ),
      )
      .returning();

    return removedMembers;
  }
}
