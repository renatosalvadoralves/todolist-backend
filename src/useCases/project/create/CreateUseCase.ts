import { IProjectSchema } from "@models/Project";
import { IProjectRepository } from "@repositories/IProjectRepository";
import { IUserByIdRequestDTO } from "@useCases/userById/UserByIdDTO";
import { ICreateRequestDTO } from "./CreateDTO";

export class CreateUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(
    data: ICreateRequestDTO,
    user: IUserByIdRequestDTO
  ): Promise<IProjectSchema> {
    return await this.projectRepository.create(data, user);
  }
}
