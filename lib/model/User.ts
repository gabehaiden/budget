import { z } from 'zod'

export const User = z.object({
  username: z.string(),
  password: z.string(),
  role: z.string(),
})

export type TUser = z.infer<typeof User>