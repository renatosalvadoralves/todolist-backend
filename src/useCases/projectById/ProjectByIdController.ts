import { NextFunction, Request, Response } from "express";
import { IProjectByIdRequestDTO } from "./ProjectByIdDTO";
import { ProjectByIdUseCase } from "./ProjectByIdUseCase";

export class ProjectByIdController {
  constructor(private projectByIdUseCase: ProjectByIdUseCase) {}

  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
    id: IProjectByIdRequestDTO
  ): Promise<void | Response> {
    try {
      const project = await this.projectByIdUseCase.execute(id);
      request.project = project;

      return next();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
