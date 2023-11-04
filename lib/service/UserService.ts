import { eq } from 'drizzle-orm';
import { db } from '../config/db';
import { users } from '../config/schema';
import { User } from '../model/User';
import { TUserBody } from './../model/request/UserBody';

export const findUserById = async (id: string): Promise<User> => {
  try {
    const user: User[] = await db.select().from(users).where(eq(users.user_id, +id))
    return user[0]
  } catch (error) {
    throw Error
  }
}

export const insertUser = async (user: TUserBody ): Promise<void> => {
  try {
    await db.insert(users).values(user)
  } catch (error) {
    throw Error
  }
}