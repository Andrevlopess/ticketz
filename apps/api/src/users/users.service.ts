import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { GlobalSchema, Profile, User, UserInsert } from '@ticketz/database';
import { eq, getTableColumns, isNull, sql } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { createInsertSchema, createUpdateSchema } from 'drizzle-zod';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { z } from 'zod';

// User is not allowed to update the email
const UserUpdateSchema = createUpdateSchema(User)
  .omit({ email: true })
  .strict();

export type UserUpdate = z.infer<typeof UserUpdateSchema>;



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

    const unrecognizedKeys = parsed.error?.issues.find(
      (issue) => issue.code === 'unrecognized_keys',
    );

    if (unrecognizedKeys) {
      throw new BadRequestException(
        `You are not allowed to update ${unrecognizedKeys.keys[0]} or this key doens't exists.`,
        {
          cause: new Error(),
          description: `Unrecognized keys: ${unrecognizedKeys.keys.join(', ')}.`,
        },
      );
    }
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.issues[0]?.message, {
        cause: new Error(),
        description: JSON.stringify(parsed.error.issues[0]),
      });
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
      throw new NotFoundException('User not found', {
        cause: new Error(),
        description: `User with id ${id} not found`,
      });
    }

    return this.db
      .update(User)
      .set({ deletedAt: sql`now()` })
      .where(eq(User.id, id))
      .returning();
  }

 
}
