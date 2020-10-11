import { DbProjectRepository } from '@repositories/implementations/DbProjectRepository'
import { UpdateUseCase } from './UpdateUseCase'
import { UpdateController } from './UpdateController'

const dbProjectRepository = new DbProjectRepository()

const updateUseCase = new UpdateUseCase(dbProjectRepository)

const updateController = new UpdateController(updateUseCase)

export { updateUseCase, updateController }
