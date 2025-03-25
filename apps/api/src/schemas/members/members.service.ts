import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import {
  GlobalSchema,
  MemberShip,
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

  findMany(organizationId: number) {
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

  async findOne(userId: number, organizationId: number) {
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
      .where(
        and(
          eq(MemberShip.organizationId, organizationId),
          eq(MemberShip.userId, userId),
        ),
      );

    if (!user) throw new NotFoundException(`User #${userId} not found!`);
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
