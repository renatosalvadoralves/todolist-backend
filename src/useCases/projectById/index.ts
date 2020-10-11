import { DbProjectRepository } from '@repositories/implementations/DbProjectRepository'
import { ProjectByIdUseCase } from './ProjectByIdUseCase'
import { ProjectByIdController } from './ProjectByIdController'

const dbProjectRepository = new DbProjectRepository()

const projectByIdUseCase = new ProjectByIdUseCase(dbProjectRepository)

const projectByIdController = new ProjectByIdController(projectByIdUseCase)

export { projectByIdUseCase, projectByIdController }
