import { DbProjectRepository } from '@repositories/implementations/DbProjectRepository'
import { CreateUseCase } from './CreateUseCase'
import { CreateController } from './CreateController'

const dbProjectRepository = new DbProjectRepository()

const createUseCase = new CreateUseCase(dbProjectRepository)

const createController = new CreateController(createUseCase)

export { createUseCase, createController }
