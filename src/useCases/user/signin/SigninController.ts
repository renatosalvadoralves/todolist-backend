import { Request, Response } from "express";
import { SigninUseCase } from "./SigninUseCase";

export class SigninController {
  constructor(private signinUseCase: SigninUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      const data = await this.signinUseCase.execute({
        email,
        password,
      });

      const { token, name, _id } = data;

      response.cookie("auth", token, { maxAge: 8640000 });

      return response.status(200).json({ _id, name, token });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
