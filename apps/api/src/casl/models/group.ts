import { z } from 'zod'

export const groupSchema = z.object({
  __typename: z.literal('Group').default('Group'),
  id: z.number(),
  ownerId: z.number(),
})

export type Group = z.infer<typeof groupSchema>
