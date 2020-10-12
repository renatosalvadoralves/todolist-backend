import User, { IUserSchema } from "@models/User";
import {
  IUsersRepository,
  IResponseSignin,
  IAuth,
  ISignup,
} from "@repositories/IUsersRepository";
import { IUserByIdRequestDTO } from "@useCases/userById/UserByIdDTO";
import jwt from "jsonwebtoken";

export class DbUsersRepository implements IUsersRepository {
  async findById(id: IUserByIdRequestDTO): Promise<IUserSchema> {
    try {
      return await User.findById({ _id: id });
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }

  async signin(data: IAuth): Promise<IResponseSignin> {
    try {
      const { email, password } = data;

      return await User.findOne({ email })
        .then((user) => {
          if (!user.authenticate(password)) {
            throw new Error();
          }
          const { _id, name } = user;
          const token = jwt.sign({ _id }, process.env.JWT_SECRET);
          return { token, name, _id };
        })
        .catch(() => {
          throw new Error("Something went wrong");
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  async signup(data: ISignup): Promise<void> {
    try {
      const user = new User(data);
      await user.save();
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }
}
