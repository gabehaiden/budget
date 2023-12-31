import { Router } from 'express'
import * as UserController from '../controllers/userController'

const UserRouter = Router()

UserRouter.get('/:id', UserController.getUserById)
UserRouter.post('/', UserController.createUser)

export default UserRouter