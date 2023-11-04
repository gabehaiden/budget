import { Router } from 'express'
import * as UserService from '../service/UserService'

const UserController = Router()

UserController.post('/', UserService.createUser)

export default UserController