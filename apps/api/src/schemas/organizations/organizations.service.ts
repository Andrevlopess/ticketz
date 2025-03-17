import { AuthService } from './../../auth/auth.service';
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
  OrganizationInsert,
  User,
} from '@ticketz/database';
import { desc, eq, isNull, sql, and, getTableColumns } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { createInsertSchema, createUpdateSchema } from 'drizzle-zod';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { ZodException } from 'src/handlers/zod.exception';
import z from 'zod';

const OrganizationUpdateSchema = createUpdateSchema(Organization);
export type OrganizationUpdate = z.infer<typeof OrganizationUpdateSchema>;

@Injectable()
export class OrganizationsService {
  constructor(
    @Inject(DrizzleAsyncProvider)
    private db: NodePgDatabase<typeof GlobalSchema>,
  ) {}

  async create(createOrganizationDto: OrganizationInsert) {
    const schema = createInsertSchema(Organization);
    const parsed = schema.safeParse(createOrganizationDto);

    if (!parsed.success) throw new ZodException(parsed.error);

    const [organization] = await this.db.transaction(async (trx) => {
      const [alreadyExists] = await trx
        .select()
        .from(Organization)
        .where(eq(Organization.name, createOrganizationDto.name));

      if (alreadyExists)
        throw new BadRequestException(
          `Organization '${createOrganizationDto.name}' already exists!`,
        );

      return trx.insert(Organization).values(createOrganizationDto).returning();
    });

    return organization;
  }

  async findMany(userId: number) {
    return this.db
      .select({
        ...getTableColumns(Organization),
      })
      .from(Organization)
      .innerJoin(MemberShip, eq(MemberShip.organizationId, Organization.id))
      .where(and(isNull(Organization.deletedAt), eq(MemberShip.userId, userId)))
      .orderBy(desc(Organization.createdAt));
  }

  async findOne(id: number, userId: number) {
    const [organization] = await this.db
      .select({
        ...getTableColumns(Organization),
      })
      .from(Organization)
      .innerJoin(MemberShip, eq(MemberShip.organizationId, Organization.id))
      .where(
        and(
          isNull(Organization.deletedAt),
          eq(MemberShip.userId, userId),
          eq(Organization.id, id),
        ),
      )
      .orderBy(desc(Organization.createdAt));

    if (!organization)
      throw new NotFoundException(`Organization #${id} not found!`);
    return organization;
  }

  async update(id: number, updateOrganizationDto: OrganizationUpdate) {

    const parsed = createUpdateSchema(Organization).safeParse(
      updateOrganizationDto,
    );

    if (!parsed.success) throw new ZodException(parsed.error);

    const [organization] = await this.db.transaction(async (trx) => {
      if (updateOrganizationDto.name) {
        const [alreadyExists] = await trx
          .select()
          .from(Organization)
          .where(eq(Organization.name, updateOrganizationDto.name));

        if (alreadyExists)
          throw new BadRequestException(
            `Organization '${updateOrganizationDto.name}' already exists!`,
          );
      }

      return trx
        .update(Organization)
        .set({ ...updateOrganizationDto, updatedAt: sql`now()` })
        .where(eq(Organization.id, id))
        .returning();
    });

    return organization;

    // const alreadyExists = await  this.db
    //   .select()
    //   .from(Organization)
    //   .where(eq(Organization.name, updateOrganizationDto.name));

    // if (alreadyExists)
    //   throw new BadRequestException(
    //     `Organization '${updateOrganizationDto.name}' already exists!`,
    //   );
  }

  async remove(id: number) {
    const organization = await this.db.query.Organization.findFirst({
      where: eq(Organization.id, id),
    });

    if (!organization) {
      throw new NotFoundException('Organization not found', {
        cause: new Error(),
        description: `Organization with id ${id} not found`,
      });
    }

    const [deletedOrganization] = await this.db
      // .delete(Organization)
      .update(Organization)
      .set({ deletedAt: sql`now()` })
      .where(eq(Organization.id, id))
      .returning();

    return deletedOrganization;
  }
}
