import { IProjectSchema } from "@models/Project";
import { ICreateRequestDTO } from "@useCases/project/create/CreateDTO";
import { IUpdateRequestDTO } from "@useCases/project/update/UpdateDTO";
import { IProjectByIdRequestDTO } from "@useCases/projectById/ProjectByIdDTO";
import { IUserByIdRequestDTO } from "@useCases/userById/UserByIdDTO";

export interface IProjectRepository {
  read(userId: IUserByIdRequestDTO): Promise<IProjectSchema[]>;
  create(
    data: ICreateRequestDTO,
    user: IUserByIdRequestDTO
  ): Promise<IProjectSchema>;
  update(
    data: IUpdateRequestDTO,
    projectId: IProjectByIdRequestDTO
  ): Promise<void>;
  delete(project: IProjectSchema): Promise<void>;
  findById(projectId: IProjectByIdRequestDTO): Promise<IProjectSchema>;
}
