import { Request, Response } from 'express'
import { ReadUseCase } from './ReadUseCase'

export class ReadController {
  constructor (private readUseCase: ReadUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { profile } = request

      const data = await this.readUseCase.execute(profile._id)

      return response.status(200).json(data)
    } catch (err) {
      console.log(err, 'err')
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
