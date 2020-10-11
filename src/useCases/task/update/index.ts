import { DbTaskRepository } from '@repositories/implementations/DbTaskRepository'
import { UpdateUseCase } from './UpdateUseCase'
import { UpdateController } from './UpdateController'

const dbTaskRepository = new DbTaskRepository()

const updateUseCase = new UpdateUseCase(dbTaskRepository)

const updateController = new UpdateController(updateUseCase)

export { updateUseCase, updateController }
