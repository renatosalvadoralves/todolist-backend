import { ITaskRepository } from '@repositories/ITaskRepository'
import { IProjectSchema } from '@models/Project'
import { ITaskByIdRequestDTO } from './TaskByIdDTO'
import { ITaskSchema } from '@models/Task'

export class TaskByIdUseCase {
  constructor (private taskRepository: ITaskRepository) {}

  async execute (taskId: ITaskByIdRequestDTO): Promise<ITaskSchema> {
    return await this.taskRepository.findById(taskId)
  }
}
