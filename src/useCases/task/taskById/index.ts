import { DbTaskRepository } from '@repositories/implementations/DbTaskRepository'
import { TaskByIdUseCase } from './TaskByIdUseCase'
import { TaskByIdController } from './TaskByIdController'

const dbTaskRepository = new DbTaskRepository()

const taskByIdUseCase = new TaskByIdUseCase(dbTaskRepository)

const taskByIdController = new TaskByIdController(taskByIdUseCase)

export { taskByIdUseCase, taskByIdController }
