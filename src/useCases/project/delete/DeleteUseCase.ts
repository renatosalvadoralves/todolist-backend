import { IProjectRepository } from '@repositories/IProjectRepository'
import { IProjectSchema } from '@models/Project'

export class DeleteUseCase {
  constructor (private projectRepository: IProjectRepository) {}

  async execute (project: IProjectSchema): Promise<void> {
    await this.projectRepository.delete(project)
  }
}
