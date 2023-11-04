import { z } from 'zod'

export const UserBody = z.object({
  username: z.string(),
  password: z.string(),
  role: z.string(),
})

export type TUserBody = z.infer<typeof UserBody>