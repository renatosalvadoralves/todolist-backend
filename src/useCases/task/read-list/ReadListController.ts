import { Request, Response } from "express";
import { ReadListUseCase } from "./ReadListUseCase";

export class ReadListController {
  constructor(private readListUseCase: ReadListUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { profile } = request;

      const data = await this.readListUseCase.execute(profile?._id);

      return response.status(200).json(data);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
