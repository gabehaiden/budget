import { Request, Response } from 'express';
import { STATUS } from '../enums/status';
import { User } from '../model/User';
import * as service from '../service/UserService';

export const createUser = async (req: Request, res: Response) => {
  const newUser = User.parse(req.body)

  try {
    await service.insertUser(newUser)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send({ error: STATUS.SERVER_ERROR })
  }
}

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id

  if (!id) return res.status(400).send({ error: STATUS.BAD_REQUEST })

  try {
    const user = await service.findUserById(id)
    res.send(user)
  } catch (error: any) {
    res.status(500).send({ error: STATUS.SERVER_ERROR })
    throw Error(error)
  }
}
