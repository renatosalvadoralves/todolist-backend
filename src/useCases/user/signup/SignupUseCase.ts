import { IUsersRepository, ISignup } from '@repositories/IUsersRepository'

export class SignupUseCase {
  constructor (private usersRepository: IUsersRepository) {}

  async execute (data: ISignup): Promise<void> {
    await this.usersRepository.signup(data)
  }
}
