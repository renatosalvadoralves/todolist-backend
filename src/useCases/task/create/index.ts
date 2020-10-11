import { DbTaskRepository } from '@repositories/implementations/DbTaskRepository'
import { CreateUseCase } from './CreateUseCase'
import { CreateController } from './CreateController'

const dbTaskRepository = new DbTaskRepository()

const createUseCase = new CreateUseCase(dbTaskRepository)

const createController = new CreateController(createUseCase)

export { createUseCase, createController }
