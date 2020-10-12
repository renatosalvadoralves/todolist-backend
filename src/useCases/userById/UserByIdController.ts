import { NextFunction, Request, Response } from "express";
import { IUserByIdRequestDTO } from "./UserByIdDTO";
import { UserByIdUseCase } from "./UserByIdUseCase";

export class UserByIdController {
  constructor(private userByIdUseCase: UserByIdUseCase) {}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
    id: IUserByIdRequestDTO
  ): Promise<void | Response> {
    try {
      const profile = await this.userByIdUseCase.execute(id);
      request.profile = profile;

      return next();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
