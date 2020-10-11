import Task, { ITaskSchema } from '@models/Task'
import Project from '@models/Project'
import { ITaskRepository } from '@repositories/ITaskRepository'
import { ICreateRequestDTO } from '@useCases/task/create/CreateDTO'
import { IProjectByIdRequestDTO } from '@useCases/projectById/ProjectByIdDTO'
import { ITaskByIdRequestDTO } from '@useCases/task/taskById/TaskByIdDTO'
import { IUserByIdRequestDTO } from '@useCases/userById/UserByIdDTO'
import { IUpdateRequestDTO } from '@useCases/task/update/UpdateDTO'

export class DbTaskRepository implements ITaskRepository {
  async readSingle (taskId: ITaskByIdRequestDTO): Promise<ITaskSchema[]> {
    try {
      return await Task.find({ _id: taskId })
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  async create (
    data: ICreateRequestDTO,
    user: IUserByIdRequestDTO,
    project: IProjectByIdRequestDTO
  ): Promise<string> {
    try {
      const task = new Task({ ...data, user, project })
      await task.save()
      return task._id
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  async addRowProject (
    projectId: IProjectByIdRequestDTO,
    taskId: ITaskByIdRequestDTO
  ): Promise<void> {
    try {
      await Project.update({ _id: projectId }, { $push: { tasks: taskId } })
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  async delete (task: ITaskSchema): Promise<void> {
    try {
      await task.remove()
      await Project.update({ _id: project }, { $push: { tasks: task._id } })
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  async deleteRowProject (
    taskId: ITaskByIdRequestDTO,
    userId: IUserByIdRequestDTO
  ): Promise<void> {
    try {
      await Project.update({ user: userId }, { $pull: { tasks: taskId } })
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  async update (
    data: IUpdateRequestDTO,
    taskId: ITaskByIdRequestDTO
  ): Promise<void> {
    try {
      await Task.findOneAndUpdate(
        { _id: taskId },
        { isCompleted: data.isCompleted }
      )
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  async findById (taskId: ITaskByIdRequestDTO): Promise<ITaskSchema> {
    try {
      return await Task.findById({
        _id: taskId
      }).populate('project')
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }
}
