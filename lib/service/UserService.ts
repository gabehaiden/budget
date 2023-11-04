import { eq } from 'drizzle-orm';
import { db } from '../config/db';
import { users } from '../config/schema';
import { TUser } from '../model/User';

export const findUserById = async (id: string) => {
  try {
    const user = await db.select().from(users).where(eq(users.user_id, +id))
    return user[0]
  } catch (error) {
    throw Error
  }
}

export const insertUser = async (user: TUser ) => {
  try {
    await db.insert(users).values(user)
  } catch (error) {
    throw Error
  }
}