import { Request, Response } from 'express'

export class ReadSingleController {
  async handle (request: Request, response: Response): Promise<void | Response> {
    try {
      request.profile.hashedPassword = undefined
      request.profile.salt = undefined
      return response.status(200).json(request.profile)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
