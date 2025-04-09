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
  GroupMembershipSelect,
  MemberShip,
  MembershipSelect,
  Organization,
  OrganizationSelect,
  Role,
  User,
  UserInsert,
  UserSelect,
} from '@ticketz/database';
import * as bcrypt from 'bcrypt';
import { and, eq, getTableColumns, isNull, sql } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { createInsertSchema, createUpdateSchema } from 'drizzle-zod';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { ZodException } from 'src/handlers/zod.exception';
import { z } from 'zod';

// User is not allowed to update the email
const UserUpdateSchema = createUpdateSchema(User)
  .omit({ email: true })
  .strict();

export type UserUpdate = z.infer<typeof UserUpdateSchema>;

// {
//   id: 10,
//   defaultOrganizationId: 1,
//   email: 'andrellopes@gmail.com',
//   password: '$2b$10$4itu.ybRAtT.sd.tYeGNgeD7bni0/YqPHC/zvqoUDX1lA22W59Wmi',
//   memberships: [ { role: 'USER', organizationId: 1 } ],
//   groupMemberships: [
//     { role: 'GROUP_MANAGER', groupId: 1 },
//     { role: 'MEMBER', groupId: 7 }
//   ]
// }
interface UserWithMemberships
  extends Pick<UserSelect, 'id' | 'password' | 'email'> {
  memberships: {
    role: Role;
    organizationId: number;
  }[];
  groupMemberships: {
    role: string;
    groupId: number;
  }[];
}

@Injectable()
export class UsersService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  //todo: insert many users at once
  async create(createUserDto: UserInsert) {
    const userInsertSchema = createInsertSchema(User, {
      email: z.string().email(),
    }).strict();

    const parsed = userInsertSchema.safeParse(createUserDto);

    if (!parsed.success) {
      throw new ZodException(parsed.error);
    }

    const existingEmail = await this.db.query.User.findFirst({
      where: eq(User.email, createUserDto.email),
    });

    if (existingEmail) {
      throw new BadRequestException('This email is already in use');
    }

    const { password, ...restOfCreateUserDto } = createUserDto;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await this.db
      .insert(User)
      .values({
        password: hashedPassword,
        ...restOfCreateUserDto,
      })
      .returning();

    return user;
  }

  async findAll() {
    const { password, ...rest } = getTableColumns(User);
    const user = await this.db
      .select({
        ...rest,
      })
      .from(User)
      .where(isNull(User.deletedAt));

    if (!user) return 'user not found';

    return user;
  }

  async findOne(id: number) {
    const user = await this.db.query.User.findFirst({
      where: eq(User.id, id),
    });

    if (!user) {
      throw new NotFoundException('User not found', {
        cause: new Error(),
        description: `User with id ${id} not found`,
      });
    }

    return user;
  }

  async update(id: number, updateUserDto: UserUpdate) {
    const parsed = UserUpdateSchema.safeParse(updateUserDto);

    if (!parsed.success) {
      throw new ZodException(parsed.error);
    }

    const updatedUser = this.db
      .update(User)
      .set({
        ...updateUserDto,
        updatedAt: sql`now()`,
      })
      .where(eq(User.id, id))
      .returning();

    return updatedUser;
  }

  async remove(id: number) {
    const user = await this.db.query.User.findFirst({
      where: eq(User.id, id),
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} found.`);
    }

    return this.db
      .update(User)
      .set({ deletedAt: sql`now()` })
      .where(eq(User.id, id))
      .returning();
  }

  async findUserByEmail(
    email: string,
  ): Promise<UserWithMemberships | undefined> {
    const user = await this.db.query.User.findFirst({
      where: eq(User.email, email),
      columns: {
        id: true,
        email: true,
        password: true,
      },
      with: {
        memberships: {
          columns: {
            role: true,
            organizationId: true,
          },
        },
        groupMemberships: {
          columns: {
            role: true,
            groupId: true,
          },
        },
      },
    });

    return user;
  }

  async findUserById(id: number): Promise<UserWithMemberships | undefined> {
    const user = await this.db.query.User.findFirst({
      where: eq(User.id, id),
      columns: {
        id: true,
        email: true,
        password: true,
      },
      with: {
        memberships: {
          columns: {
            role: true,
            organizationId: true,
          },
        },
        groupMemberships: {
          columns: {
            role: true,
            groupId: true,
          },
        },
      },
    });

    return user;
  }

  async getMembership(
    userId: number,
    slug: string,
  ): Promise<
    | {
        membership: MembershipSelect;
        organization: OrganizationSelect;
      }
    | undefined
  > {
    const [membership] = await this.db
      .select()
      .from(MemberShip)
      .innerJoin(Organization, eq(MemberShip.organizationId, Organization.id))
      .where(and(eq(Organization.slug, slug), eq(MemberShip.userId, userId)));

    return membership;
  }

  async getGroupMembership(
    userId: number,
    groupId: number,
  ): Promise<GroupMembershipSelect | undefined> {
    const [membership] = await this.db
      .select()
      .from(GroupMembership)
      .where(
        and(
          eq(GroupMembership.groupId, groupId),
          eq(GroupMembership.userId, userId),
        ),
      );

    return membership;
  }

  async resetPasswords() {
    const hashedPassword = bcrypt.hashSync('123456', 10);

    const user = await this.db.update(User).set({ password: hashedPassword });
    return user;
  }
}
