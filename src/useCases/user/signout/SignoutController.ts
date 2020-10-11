import { Request, Response } from 'express'

export class SignoutController {
  async handle (request: Request, response: Response): Promise<Response | void> {
    try {
      response.clearCookie('auth')

      return response.status(201).end()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
