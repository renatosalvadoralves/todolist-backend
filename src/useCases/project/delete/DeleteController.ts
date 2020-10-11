import { Request, Response } from 'express'
import { DeleteUseCase } from './DeleteUseCase'

export class DeleteController {
  constructor (private deleteUseCase: DeleteUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { profile, project } = request
      if (String(profile?._id) !== String(project?.user)) {
        throw new Error('Access Denied')
      }

      await this.deleteUseCase.execute(project)

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
