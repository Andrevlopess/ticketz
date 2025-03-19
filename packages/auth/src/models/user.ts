import { RoleEnumSchema } from '@ticketz/database'
import { z } from 'zod'


export const userSchema = z.object({
  id: z.number(),
  role: RoleEnumSchema,
})

export type User = z.infer<typeof userSchema>
