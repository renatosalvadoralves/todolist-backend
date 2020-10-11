import { Request, Response, NextFunction, Router } from 'express'
import { isAuth, requireSignin } from '@middleware/auth'
import { userByIdController } from '@useCases/userById'
import { projectByIdController } from '@useCases/projectById'
import { readController } from '@useCases/project/read'
import { createController } from '@useCases/project/create'
import { deleteController } from '@useCases/project/delete'
import { updateController } from '@useCases/project/update'
import { IProjectByIdRequestDTO } from '@useCases/projectById/ProjectByIdDTO'
import { IUserByIdRequestDTO } from '@useCases/userById/UserByIdDTO'

const router = Router()

router.get(
  '/projects/:userId',
  requireSignin,
  isAuth,
  (req: Request, res: Response) => readController.handle(req, res)
)

router.post(
  '/project/:userId',
  requireSignin,
  isAuth,
  (req: Request, res: Response) => createController.handle(req, res)
)

router.patch(
  '/project/:projectId/:userId',
  requireSignin,
  isAuth,
  (req: Request, res: Response) => updateController.handle(req, res)
)

router.delete(
  '/project/:projectId/:userId',
  requireSignin,
  isAuth,
  (req: Request, res: Response) => deleteController.handle(req, res)
)

router.param(
  'projectId',
  (
    req: Request,
    res: Response,
    next: NextFunction,
    id: IProjectByIdRequestDTO
  ) => projectByIdController.handle(req, res, next, id)
)

router.param(
  'userId',
  (req: Request, res: Response, next: NextFunction, id: IUserByIdRequestDTO) =>
    userByIdController.handle(req, res, next, id)
)

export default { router }
