import { ITaskRepository } from '@repositories/ITaskRepository'
import { ITaskSchema } from '@models/Task'

export class DeleteUseCase {
  constructor (private taskRepository: ITaskRepository) {}

  async execute (task: ITaskSchema, user: string): Promise<void> {
    await this.taskRepository.delete(task)
    await this.taskRepository.deleteRowProject(task._id, user)
  }
}
