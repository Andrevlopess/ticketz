import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  GlobalSchema,
  MemberShip,
  Organization,
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

  findMany(orgId: number) {
    const insertedTags = this.db
      .select({
        id: User.id,
        email: User.email,
        role: MemberShip.role
      })
      .from(MemberShip)
      .innerJoin(User, and(eq(User.id, MemberShip.userId)))
      .where(eq(MemberShip.organizationId, orgId));

    return insertedTags;
  }

  async add(organizationId: number, userId: number) {
    console.log(organizationId, userId);

    const [isMember] = await this.db
      .select()
      .from(MemberShip)
      .where(
        and(
          eq(MemberShip.userId, userId),
          eq(MemberShip.organizationId, organizationId),
        ),
      );

    if (isMember)
      throw new BadRequestException(`User #${userId} is already a member!`);

    const newMember = await this.db.transaction(async (trx) => {
      const [organization] = await trx
        .select()
        .from(Organization)
        .where(eq(Organization.id, organizationId));

      if (!organization) {
        throw new NotFoundException(
          `Organization with slug ${organizationId} not found!`,
        );
      }

      return await this.db
        .insert(MemberShip)
        .values({
          userId: userId,
          organizationId: organization.id
        })
        .returning({
          userId: MemberShip.userId,
        });
    });

    return newMember;
  }

  async findOne(memberId: number, organizationId: number) {
    const [user] = await this.db
      .select()
      .from(MemberShip)
      // .innerJoin(User, eq(User.id, MemberShip.userId))
      .where(
        and(
          eq(MemberShip.organizationId, organizationId),
          eq(MemberShip.userId, memberId),
        ),
      );

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
