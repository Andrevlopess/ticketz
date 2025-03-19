import { z } from 'zod'

import { createSelectSchema } from 'drizzle-zod'
import { Organization } from '@ticketz/database'

export const organizationSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('update'),
    z.literal('delete'),
    z.literal('transfer_ownership'),
  ]),
  z.union([z.literal('Organization'), createSelectSchema(Organization)]),
])

export type OrganizationSubject = z.infer<typeof organizationSubject>
