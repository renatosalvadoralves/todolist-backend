import { Router, Request, Response, NextFunction } from 'express'
import { isAuth, requireSignin } from '@middleware/auth'
import { signinController } from '@useCases/user/signin'
import { signupController } from '@useCases/user/signup'
import { signoutController } from '@useCases/user/signout'
import { userByIdController } from '@useCases/userById'
import { IUserByIdRequestDTO } from '@useCases/userById/UserByIdDTO'

const router = Router()

router.post('/signin', (req: Request, res: Response) =>
  signinController.handle(req, res)
)

router.post('/signup', (req: Request, res: Response) =>
  signupController.handle(req, res)
)

router.get(
  '/signout/:userId',
  requireSignin,
  isAuth,
  (req: Request, res: Response) => signoutController.handle(req, res)
)

router.get(
  '/secret/:userId',
  requireSignin,
  isAuth,
  (req: Request, res: Response) => {
    res.json({
      user: req.profile
    })
  }
)

router.param(
  'userId',
  (req: Request, res: Response, next: NextFunction, id: IUserByIdRequestDTO) =>
    userByIdController.handle(req, res, next, id)
)

export default { router }
