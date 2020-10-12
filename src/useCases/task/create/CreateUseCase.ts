import { ITaskSchema } from "@models/Task";
import { ITaskRepository } from "@repositories/ITaskRepository";
import { IProjectByIdRequestDTO } from "@useCases/projectById/ProjectByIdDTO";
import { IUserByIdRequestDTO } from "@useCases/userById/UserByIdDTO";
import { ICreateRequestDTO } from "./CreateDTO";

export class CreateUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(
    data: ICreateRequestDTO,
    userId: IUserByIdRequestDTO,
    projectId: IProjectByIdRequestDTO
  ): Promise<ITaskSchema> {
    const taskId = await this.taskRepository.create(data, userId, projectId);
    await this.taskRepository.addRowProject(projectId, taskId);
    return await this.taskRepository.readSingle(taskId);
  }
}
