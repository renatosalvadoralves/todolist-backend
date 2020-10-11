import { Request, Response } from 'express'
import { DeleteUseCase } from './DeleteUseCase'

export class DeleteController {
  constructor (private deleteUseCase: DeleteUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { task, profile } = request

      if (String(profile?._id) !== String(task?.user)) {
        throw new Error('Access Denied')
      }

      await this.deleteUseCase.execute(task, profile._id)

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
