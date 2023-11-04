import { z } from 'zod'

export const ProductBody = z.object({
  description: z.string(),
  barcode: z.number().optional(),
  price: z.number(),
  cost: z.number().optional(),
})

export type TProductBody = z.infer<typeof ProductBody>