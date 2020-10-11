import { Request, Response, NextFunction } from 'express'
import expressJwt, { RequestHandler } from 'express-jwt'
import User from '@models/User'

export const requireSignin: RequestHandler = expressJwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'auth',
  algorithms: ['HS256']
})

export function isAuth (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> | void {
  const user =
    req.cookies.auth &&
    req.profile &&
    req.auth &&
    String(req.profile._id) === req.auth._id

  if (!user) {
    res.status(401).json('Access denied')
  }

  next()
}

export function userById (
  req: Request,
  res: Response,
  next: NextFunction,
  id: string
): Promise<Response> | void {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found'
      })
    }
    req.profile = user
    next()
  })
}
