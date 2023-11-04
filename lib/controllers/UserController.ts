import { Request, Response } from 'express';
import { STATUS } from '../enums/status';
import { User } from '../model/User';
import { UserBody } from '../model/request/UserBody';
import * as service from '../service/userService';
import { ErrorHTTP } from './../types/ErrorHTTP';

export const createUser = async (req: Request, res: Response) => {
  const newUser = UserBody.safeParse(req.body)

  if(!newUser.success) {
    return res.status(400).send({ error: STATUS.BAD_REQUEST})
  }

  try {
    await service.insertUser(newUser.data)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send({ error: STATUS.SERVER_ERROR })
  }
}

export const getUserById = async (req: Request, res: Response<User | ErrorHTTP>) => {
  const id = req.params.id

  if (!id) return res.status(400).send({ error: STATUS.BAD_REQUEST })

  try {
    const user: User = await service.findUserById(id)
    res.send(user)
  } catch (error: any) {
    res.status(500).send({ error: STATUS.SERVER_ERROR })
    throw Error(error)
  }
}
