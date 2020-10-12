import { IUserSchema } from "@models/User";
import { IUserByIdRequestDTO } from "@useCases/userById/UserByIdDTO";

export interface IUsersRepository {
  signin(user: IAuth): Promise<IResponseSignin>;
  signup(user: ISignup): Promise<void>;
  findById(userId: IUserByIdRequestDTO): Promise<IUserSchema>;
}
export interface IResponseSignin {
  _id: string;
  token: string;
  name: string;
}

export interface IAuth {
  email: string;
  password: string;
}

export interface ISignup {
  email: string;
  password: string;
  name: string;
}
