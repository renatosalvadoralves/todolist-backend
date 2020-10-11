import { IProjectRepository } from '@repositories/IProjectRepository'
import { IProjectByIdRequestDTO } from '@useCases/projectById/ProjectByIdDTO'
import { IUpdateRequestDTO } from './UpdateDTO'

export class UpdateUseCase {
  constructor (private projectRepository: IProjectRepository) {}

  async execute (
    data: IUpdateRequestDTO,
    projectId: IProjectByIdRequestDTO
  ): Promise<void> {
    return await this.projectRepository.update(data, projectId)
  }
}
