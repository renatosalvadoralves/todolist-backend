import { IProjectSchema } from '@models/Project'
import { IProjectRepository } from '@repositories/IProjectRepository'
import { IUserByIdRequestDTO } from '@useCases/userById/UserByIdDTO'
import { IReadRequestDTO } from './ReadDTO'

export class ReadUseCase {
  constructor (private projectRepository: IProjectRepository) {}

  async execute (userId: IUserByIdRequestDTO): Promise<IProjectSchema[]> {
    return await this.projectRepository.read(userId)
  }
}
