import { Request, Response } from 'express'
import { UpdateUseCase } from './UpdateUseCase'

export class UpdateController {
  constructor (private updateUseCase: UpdateUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { body, profile, project } = request

      if (String(profile?._id) !== String(project?.user)) {
        throw new Error('Access Denied')
      }

      await this.updateUseCase.execute(body, project._id)

      return response.status(201).send()
    } catch (err) {
      console.log(err, 'err')
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
