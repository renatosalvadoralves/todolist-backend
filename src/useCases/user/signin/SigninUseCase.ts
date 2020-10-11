import {
  IUsersRepository,
  IResponseSignin,
  IAuth
} from '@repositories/IUsersRepository'

export class SigninUseCase {
  constructor (private usersRepository: IUsersRepository) {}

  async execute (data: IAuth): Promise<IResponseSignin> {
    return await this.usersRepository.signin(data)
  }
}
