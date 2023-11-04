import { eq } from 'drizzle-orm';
import { db } from '../config/db';
import { products } from '../config/schema';
import { Product } from '../model/Product';
import { TProductBody } from '../model/request/ProductBody';

export const findProductById = async (id: string): Promise<Product> => {
  try {
    const product: Product[] = await db.select().from(products).where(eq(products.product_id, +id))
    return product[0]
  } catch (error) {
    throw Error
  }
}

export const insertProduct = async (product: TProductBody): Promise<void> => {
  try {
    await db.insert(products).values(product)
  } catch (error) {
    throw Error
  }
}