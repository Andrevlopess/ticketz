import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  GlobalSchema,
  Organization,
  OrganizationInsert,
} from '@ticketz/database';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { createInsertSchema } from 'drizzle-zod';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { ZodException } from 'src/handlers/zod.exception';

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

      if (alreadyExists) throw new BadRequestException(`Organization '${createOrganizationDto.name}' already exists!`);

      return trx.insert(Organization).values(createOrganizationDto).returning();
    });

    return organization;
  }

  findAll() {
    return this.db.select().from(Organization);
  }

  async findOne(id: number) {
    const [organization] = await this.db
      .select()
      .from(Organization)
      .where(eq(Organization.id, id));

    if (!organization)
      throw new NotFoundException(`Organization #${id} not found!`);
    return organization;
  }

  update(id: number, updateOrganizationDto: any) {
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
