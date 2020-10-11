import { Request, Response } from 'express'
import { CreateUseCase } from './CreateUseCase'

export class CreateController {
  constructor (private createUseCase: CreateUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { body, profile } = request

      await this.createUseCase.execute(body, profile._id)

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
