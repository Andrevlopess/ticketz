import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { GlobalSchema, Profile, ProfileInsert, User } from '@ticketz/database';
import { and, eq, getTableColumns, isNull, sql } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { createInsertSchema, createUpdateSchema } from 'drizzle-zod';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { z } from 'zod';
import bcrypt from 'bcrypt';

const ProfileUpdateSchema = createUpdateSchema(Profile)
  .omit({ userId: true })
  .strict();

export type ProfileUpdate = z.infer<typeof ProfileUpdateSchema>;

const UserInsertSchema = createInsertSchema(User, {
  email: z.string().email(),
}).strict();

const ProfileInsertSchema = createInsertSchema(Profile, {
  phone: z
    .string()
    .regex(
      /^\+?[1-9][0-9]{7,14}$/,
      'Invalid phone number format. Use only numbers.',
    )
    .optional(),
});

const RegisterSchema = UserInsertSchema.merge(ProfileInsertSchema).omit({
  userId: true,
});
export type RegisterInsert = z.infer<typeof RegisterSchema>;

@Injectable()
export class ProfilesService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  async create(createProfileDto: ProfileInsert) {
    const ProfileCreateSchema = createInsertSchema(Profile).strict();

    const parsed = ProfileCreateSchema.safeParse(createProfileDto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.issues[0]?.message, {
        cause: new Error(),
        description: parsed.error.issues[0]?.code,
      });
    }

    const existingProfile = await this.db.query.User.findFirst({
      where: eq(Profile.userId, createProfileDto.userId),
    });

    if (existingProfile) {
      throw new BadRequestException('An profile already exists for this user', {
        cause: new Error(),
        description: `unavailable_email`,
      });
    }

    const profile = await this.db
      .insert(Profile)
      .values(createProfileDto)
      .returning();

    return profile;
  }

  async findAll() {
    const profiles = await this.db
      .select({
        ...getTableColumns(Profile),
        email: User.email,
        fullName: sql`concat(${Profile.firstName}, ' ', ${Profile.lastName})`,
      })
      .from(Profile)
      .innerJoin(User, eq(User.id, Profile.userId))
      .where(isNull(Profile.deletedAt));

    if (!profiles) return 'user not found';

    return profiles;
  }

  async findOne(id: number) {
    const [profile] = await this.db
      .select({
        ...getTableColumns(Profile),
        email: User.email,
        fullName: sql`concat(${Profile.firstName}, ' ', ${Profile.lastName})`,
      })
      .from(Profile)
      .innerJoin(User, eq(User.id, Profile.userId))
      .where(and(isNull(Profile.deletedAt), eq(Profile.id, id)));

    if (!profile) {
      throw new NotFoundException('Profile not found', {
        cause: new Error(),
        description: `Profile with id ${id} not found`,
      });
    }

    return profile;
  }

  async update(id: number, updateUserDto: ProfileUpdate) {
    const ProfileUpdateSchema = createUpdateSchema(Profile, {
      phone: z
        .string()
        .regex(
          /^\+?[1-9][0-9]{7,14}$/,
          'Invalid phone number format. Use only numbers.',
        )
        .optional(),
    })
      .omit({
        userId: true,
      })
      .strict();
    const parsed = ProfileUpdateSchema.safeParse(updateUserDto);

    if (!parsed.success) {
      throw new BadRequestException(parsed.error.issues[0]?.message, {
        cause: new Error(),
        description: JSON.stringify(parsed.error.issues[0]),
      });
    }

    const [updatedProfile] = await this.db
      .update(Profile)
      .set({
        ...updateUserDto,
        updatedAt: sql`now()`,
      })
      .where(eq(Profile.id, id))
      .returning();

    return updatedProfile;
  }

  async remove(id: number) {
    const profile = await this.db.query.Profile.findFirst({
      where: eq(Profile.id, id),
    });

    if (!profile) {
      throw new NotFoundException('User not found', {
        cause: new Error(),
        description: `User with id ${id} not found`,
      });
    }

    const [deletedProfile] = await this.db
      .update(Profile)
      .set({ deletedAt: sql`now()` })
      .where(eq(Profile.id, id))
      .returning();

    return deletedProfile;
  }

  async register(registerUserDto: RegisterInsert) {
    const parsed = RegisterSchema.safeParse(registerUserDto);

    if (!parsed.success) {
      // return parsed.error
      throw new BadRequestException(
        `${parsed.error.issues[0]?.message} Fields: ${parsed.error.issues[0]?.path.join(', ')}`,
        {
          cause: new Error(),
          description: parsed.error.issues[0]?.code,
        },
      );
    }

    const existingUser = await this.db.query.User.findFirst({
      where: eq(User.email, registerUserDto.email),
    });

    if (existingUser) {
      throw new BadRequestException('This email is already in use!', {
        cause: new Error(),
        description: `unavailable_email`,
      });
    }

    const hashedPassword = await bcrypt.hashSync(registerUserDto.password, 10);

    const user = await this.db.transaction(async (trx) => {
      registerUserDto.password = hashedPassword;

      const [user] = await trx.insert(User).values(registerUserDto).returning();

      if (!user) {
        throw new InternalServerErrorException('User creation failed', {
          cause: new Error(),
          description: `insert_error`,
        });
      }
      const [profile] = await trx
        .insert(Profile)
        .values({ userId: user?.id, ...registerUserDto })
        .returning();

      if (!profile) {
        throw new InternalServerErrorException('Profile creation failed', {
          cause: new Error(),
          description: `insert_error`,
        });
      }

      return { ...user, ...profile };
    });

    const { password, ...register } = user;
    return register;
  }
}
