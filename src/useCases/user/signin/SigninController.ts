import { Request, Response } from 'express'
import { SigninUseCase } from './SigninUseCase'

export class SigninController {
  constructor (private signinUseCase: SigninUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    try {
      const token = await this.signinUseCase.execute({
        email,
        password
      })

      response.cookie('auth', token, { maxAge: 8640000 })

      return response.status(200).json(token)
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
