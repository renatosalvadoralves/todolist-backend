import { ITaskRepository } from '@repositories/ITaskRepository'
import { ITaskByIdRequestDTO } from '../taskById/TaskByIdDTO'
import { IUpdateRequestDTO } from './UpdateDTO'

export class UpdateUseCase {
  constructor (private taskRepository: ITaskRepository) {}

  async execute (
    data: IUpdateRequestDTO,
    taskId: ITaskByIdRequestDTO
  ): Promise<void> {
    await this.taskRepository.update(data, taskId)
  }
}
