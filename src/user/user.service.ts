import { UserType } from './types/user.type';
import UserModel from './user.schema'

export class UserService {
    
    constructor(){}

    async create(user: UserType) {
        await UserModel.create(user)
    }

    async findAll() {
        return await UserModel.find()
    }

    async find(id) {
        return await UserModel.findById(id)
    }

    async update(id, data: UserType){
        return await UserModel.findByIdAndUpdate(id, {
            "firstName": data.firstName,
            "lastName": data.lastName,
            "email": data.email,
            "age": data.age
        }, {new: true})
    }

    async delete(id) {
        await UserModel.findByIdAndDelete(id)
        return "usuario deletado"
    }

}