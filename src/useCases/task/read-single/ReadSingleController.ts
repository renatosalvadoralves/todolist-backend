import { Request, Response } from 'express'
import { ReadSingleUseCase } from './ReadSingleUseCase'

export class ReadSingleController {
  constructor (private readSingleUseCase: ReadSingleUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { profile, task } = request

      if (String(profile?._id) !== String(task?.user)) {
        throw new Error('Access Denied')
      }

      const data = await this.readSingleUseCase.execute(task._id)

      return response.status(200).json(data)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
