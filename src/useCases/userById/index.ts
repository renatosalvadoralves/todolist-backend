import { DbUsersRepository } from '@repositories/implementations/DbUsersRepository'
import { UserByIdUseCase } from './UserByIdUseCase'
import { UserByIdController } from './UserByIdController'

const dbUsersRepository = new DbUsersRepository()

const userByIdUseCase = new UserByIdUseCase(dbUsersRepository)

const userByIdController = new UserByIdController(userByIdUseCase)

export { userByIdUseCase, userByIdController }
