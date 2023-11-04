import { z } from 'zod'

const User = z.object({
  username: z.string(),
  password: z.string(),
  role: z.string(),
})

export default User