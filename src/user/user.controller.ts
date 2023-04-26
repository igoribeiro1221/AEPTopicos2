import {Request, Response} from 'express'
import { UserService } from './user.service'

class UserController {

    async create(req: Request, res: Response) {
        const createdUser = await new UserService().create(req.body)
        return res.status(200).json(createdUser)
    }

    async findAll(req: Request, res: Response) {
        const users = await new UserService().findAll()
        return res.status(200).json(users)
    }

    async find(req: Request, res: Response) {
        const user = await new UserService().find(req.params.id)
        return res.status(200).json(user)
    }

    async update(req: Request, res: Response) {
        const updatedUser = await new UserService().update(req.params.id, req.body)
        return res.status(200).json(updatedUser)
    }

    async delete(req: Request, res: Response) {
        const deletedUser = await new UserService().delete(req.params.id)
        return res.status(200).json(deletedUser)
    }
}

export default new UserController()