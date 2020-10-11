import { IUserSchema } from '@models/User'
import { IUserByIdRequestDTO } from '@useCases/userById/UserByIdDTO'

export interface IUsersRepository {
  signin(user: IAuth): Promise<IResponseSignin>
  signup(user: ISignup): Promise<void>
  findById(userId: IUserByIdRequestDTO): Promise<IUserSchema>
}
export type IResponseSignin = string

export interface IAuth {
  email: string
  password: string
}

export interface ISignup {
  email: string
  password: string
  name: string
}
