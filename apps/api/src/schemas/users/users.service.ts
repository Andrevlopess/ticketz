import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import {
  GlobalSchema,
  MemberShip,
  Profile,
  User,
  UserInsert,
  UserSelect,
} from '@ticketz/database';
import { and, eq, getTableColumns, isNotNull, isNull, sql } from 'drizzle-orm';
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
type ValidateUser = Pick<
  UserSelect,
  'id' | 'email' | 'password' | 'defaultOrganizationId'
>;

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
      throw new BadRequestException(parsed.error.issues[0]?.message, {
        cause: new Error(),
        description: parsed.error.issues[0]?.code,
      });
    }

    const existingUser = await this.db.query.User.findFirst({
      where: eq(User.email, createUserDto.email),
    });

    if (existingUser) {
      throw new BadRequestException('This email is already in use!', {
        cause: new Error(),
        description: `unavailable_email`,
      });
    }

    const user = await this.db.insert(User).values(createUserDto).returning();

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

  ////

  async findUserByEmail(email: string): Promise<ValidateUser | undefined> {
    const [user] = await this.db
      .select({
        id: User.id,
        email: User.email,
        password: User.password,
        defaultOrganizationId: User.defaultOrganizationId,
      })
      .from(User)
      .where(and(eq(User.email, email), isNotNull(User.defaultOrganizationId)));

    return user;
  }

  async validateMembership(userId: number, organizationId: number) {
    const [membership] = await this.db
      .select()
      .from(MemberShip)
      .where(
        and(
          eq(MemberShip.userId, userId),
          eq(MemberShip.organizationId, organizationId),
        ),
      );


    if (!membership) return false;

    return true;
  }
}
