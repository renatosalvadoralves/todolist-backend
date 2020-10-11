import { IUsersRepository } from '@repositories/IUsersRepository'
import { IUserSchema } from '@models/User'
import { IUserByIdRequestDTO } from './UserByIdDTO'

export class UserByIdUseCase {
  constructor (private usersRepository: IUsersRepository) {}

  async execute (userId: IUserByIdRequestDTO): Promise<IUserSchema> {
    return await this.usersRepository.findById(userId)
  }
}
