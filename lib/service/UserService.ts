import { Request, Response } from 'express';
import { db } from '../config/db';
import { users } from '../config/schema';
import User from '../model/User';

export const createUser = async (req: Request, res: Response) => {
  const newUser = User.parse(req.body)
  
  try {
    await db.insert(users).values(newUser)
    res.send(201)
  } catch (error) {
    throw res.status(500).send({ error: error })
  }
}
