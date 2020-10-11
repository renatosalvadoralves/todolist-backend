import { ITaskSchema } from '@models/Task'
import { ITaskRepository } from '@repositories/ITaskRepository'
import { ITaskByIdRequestDTO } from '../taskById/TaskByIdDTO'

export class ReadSingleUseCase {
  constructor (private taskRepository: ITaskRepository) {}

  async execute (taskId: ITaskByIdRequestDTO): Promise<ITaskSchema[]> {
    return await this.taskRepository.readSingle(taskId)
  }
}
