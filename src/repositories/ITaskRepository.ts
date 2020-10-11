import { ITaskSchema } from '@models/Task'
import { IUpdateRequestDTO } from '@useCases/task/update/UpdateDTO'
import { IProjectByIdRequestDTO } from '@useCases/projectById/ProjectByIdDTO'
import { ICreateRequestDTO } from '@useCases/task/create/CreateDTO'
import { ITaskByIdRequestDTO } from '@useCases/task/taskById/TaskByIdDTO'
import { IUserByIdRequestDTO } from '@useCases/userById/UserByIdDTO'

export interface ITaskRepository {
  create(
    data: ICreateRequestDTO,
    userId: IUserByIdRequestDTO,
    projectId: IProjectByIdRequestDTO
  ): Promise<string>
  delete(task: ITaskSchema): Promise<void>
  readSingle(taskId: ITaskByIdRequestDTO): Promise<ITaskSchema[]>
  findById(taskId: ITaskByIdRequestDTO): Promise<ITaskSchema>
  addRowProject(
    projectId: IProjectByIdRequestDTO,
    taskId: ITaskByIdRequestDTO
  ): Promise<void>
  deleteRowProject(
    taskId: ITaskByIdRequestDTO,
    userId: IUserByIdRequestDTO
  ): Promise<void>
  update(data: IUpdateRequestDTO, taskId: ITaskByIdRequestDTO): Promise<void>
}
