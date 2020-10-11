import { IProjectRepository } from '@repositories/IProjectRepository'
import { IProjectSchema } from '@models/Project'
import { IProjectByIdRequestDTO } from './ProjectByIdDTO'

export class ProjectByIdUseCase {
  constructor (private projectRepository: IProjectRepository) {}

  async execute (projectId: IProjectByIdRequestDTO): Promise<IProjectSchema> {
    return await this.projectRepository.findById(projectId)
  }
}
