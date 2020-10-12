import { Request, Response, NextFunction, Router } from "express";
import { isAuth, requireSignin } from "@middleware/auth";
import { userByIdController } from "@useCases/userById";
import { taskByIdController } from "@useCases/task/taskById";
import { projectByIdController } from "@useCases/projectById";
import { readSingleController } from "@useCases/task/read-single";
import { readListController } from "@useCases/task/read-list";
import { createController } from "@useCases/task/create";
import { deleteController } from "@useCases/task/delete";
import { updateController } from "@useCases/task/update";
import { IProjectByIdRequestDTO } from "@useCases/projectById/ProjectByIdDTO";
import { ITaskByIdRequestDTO } from "@useCases/task/taskById/TaskByIdDTO";
import { IUserByIdRequestDTO } from "@useCases/userById/UserByIdDTO";

const router = Router();

router.get(
  "/tasks/:userId",
  requireSignin,
  isAuth,
  (req: Request, res: Response) => readListController.handle(req, res)
);

router.post(
  "/task/:projectId/:userId",
  requireSignin,
  isAuth,
  (req: Request, res: Response) => createController.handle(req, res)
);

router.delete(
  "/task/:taskId/:userId",
  requireSignin,
  isAuth,
  (req: Request, res: Response) => deleteController.handle(req, res)
);

router.get(
  "/task/:taskId/:userId",
  requireSignin,
  isAuth,
  (req: Request, res: Response) => readSingleController.handle(req, res)
);

router.patch(
  "/task/:taskId/:userId",
  requireSignin,
  isAuth,
  (req: Request, res: Response) => updateController.handle(req, res)
);

router.param(
  "taskId",
  (req: Request, res: Response, next: NextFunction, id: ITaskByIdRequestDTO) =>
    taskByIdController.handle(req, res, next, id)
);

router.param(
  "projectId",
  (
    req: Request,
    res: Response,
    next: NextFunction,
    id: IProjectByIdRequestDTO
  ) => projectByIdController.handle(req, res, next, id)
);

router.param(
  "userId",
  (req: Request, res: Response, next: NextFunction, id: IUserByIdRequestDTO) =>
    userByIdController.handle(req, res, next, id)
);

export default { router };
