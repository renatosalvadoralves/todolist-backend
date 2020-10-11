import { DbUsersRepository } from '@repositories/implementations/DbUsersRepository'
import { SigninUseCase } from './SigninUseCase'
import { SigninController } from './SigninController'

const dbUsersRepository = new DbUsersRepository()

const signinUseCase = new SigninUseCase(dbUsersRepository)

const signinController = new SigninController(signinUseCase)

export { signinUseCase, signinController }
