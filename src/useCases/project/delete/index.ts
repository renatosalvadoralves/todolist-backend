import { DbProjectRepository } from '@repositories/implementations/DbProjectRepository'
import { DeleteUseCase } from './DeleteUseCase'
import { DeleteController } from './DeleteController'

const dbProjectRepository = new DbProjectRepository()

const deleteUseCase = new DeleteUseCase(dbProjectRepository)

const deleteController = new DeleteController(deleteUseCase)

export { deleteUseCase, deleteController }
