import { Request, Response } from "express";
import { CreateUseCase } from "./CreateUseCase";

export class CreateController {
  constructor(private createUseCase: CreateUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { body, profile, project } = request;

      if (String(profile?._id) !== String(project?.user)) {
        throw new Error("Access Denied");
      }

      const newTask = await this.createUseCase.execute(
        body,
        profile._id,
        project._id
      );
      return response.status(200).send(newTask);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
