import Project, { IProjectSchema } from '@models/Project'
import Task from '@models/Task'
import { IProjectRepository } from '@repositories/IProjectRepository'
import { ICreateRequestDTO } from '@useCases/project/create/CreateDTO'
import { IProjectByIdRequestDTO } from '@useCases/projectById/ProjectByIdDTO'
import { IReadRequestDTO } from '@useCases/project/read/ReadDTO'
import { IUpdateRequestDTO } from '@useCases/project/update/UpdateDTO'
import { IUserByIdRequestDTO } from '@useCases/userById/UserByIdDTO'

export class DbProjectRepository implements IProjectRepository {
  async read (userId: IUserByIdRequestDTO): Promise<IProjectSchema[]> {
    try {
      return await Project.find({ user: userId }).populate('tasks')
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  async create (
    data: ICreateRequestDTO,
    user: IUserByIdRequestDTO
  ): Promise<void> {
    try {
      const project = new Project({ ...data, user })
      await project.save()
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  async delete (project: IProjectSchema): Promise<void> {
    try {
      await project.remove()
      await Task.remove({ project: project._id })
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  async update (
    data: IUpdateRequestDTO,
    projectId: IProjectByIdRequestDTO
  ): Promise<void> {
    try {
      await Project.findOneAndUpdate({ _id: projectId }, { name: data.name })
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }

  async findById (projectId: IProjectByIdRequestDTO): Promise<IProjectSchema> {
    try {
      return await Project.findById({ _id: projectId })
    } catch (error) {
      throw new Error('Something went wrong')
    }
  }
}
