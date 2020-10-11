import { DbTaskRepository } from '@repositories/implementations/DbTaskRepository'
import { ReadSingleUseCase } from './ReadSingleUseCase'
import { ReadSingleController } from './ReadSingleController'

const dbTaskRepository = new DbTaskRepository()

const readSingleUseCase = new ReadSingleUseCase(dbTaskRepository)

const readSingleController = new ReadSingleController(readSingleUseCase)

export { readSingleUseCase, readSingleController }
