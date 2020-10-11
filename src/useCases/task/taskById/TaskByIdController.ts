import { NextFunction, Request, Response } from 'express'
import { ITaskByIdRequestDTO } from './TaskByIdDTO'
import { TaskByIdUseCase } from './TaskByIdUseCase'

export class TaskByIdController {
  constructor (private taskByIdUseCase: TaskByIdUseCase) {}

  async handle (
    request: Request,
    response: Response,
    next: NextFunction,
    id: ITaskByIdRequestDTO
  ): Promise<void | Response> {
    try {
      const task = await this.taskByIdUseCase.execute(id)
      request.task = task

      return next()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
