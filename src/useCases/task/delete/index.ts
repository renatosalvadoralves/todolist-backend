import { DbTaskRepository } from '@repositories/implementations/DbTaskRepository'
import { DeleteUseCase } from './DeleteUseCase'
import { DeleteController } from './DeleteController'

const dbTaskRepository = new DbTaskRepository()

const deleteUseCase = new DeleteUseCase(dbTaskRepository)

const deleteController = new DeleteController(deleteUseCase)

export { deleteUseCase, deleteController }
