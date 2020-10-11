import { Request, Response } from 'express'
import { SignupUseCase } from './SignupUseCase'

export class SignupController {
  constructor (private signupUseCase: SignupUseCase) {}

  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { email, password, name } = request.body

      await this.signupUseCase.execute({
        email,
        password,
        name
      })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}
