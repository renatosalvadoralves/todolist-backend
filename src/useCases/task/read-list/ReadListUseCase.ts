import { ITaskSchema } from "@models/Task";
import { ITaskRepository } from "@repositories/ITaskRepository";
import { IUserByIdRequestDTO } from "@useCases/userById/UserByIdDTO";

export class ReadListUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  async execute(userId: IUserByIdRequestDTO): Promise<ITaskSchema[]> {
    return await this.taskRepository.readList(userId);
  }
}
