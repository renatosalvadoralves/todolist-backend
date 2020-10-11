import { DbUsersRepository } from '@repositories/implementations/DbUsersRepository'
import { SignupUseCase } from './SignupUseCase'
import { SignupController } from './SignupController'

const dbUsersRepository = new DbUsersRepository()

const signupUseCase = new SignupUseCase(dbUsersRepository)

const signupController = new SignupController(signupUseCase)

export { signupUseCase, signupController }
