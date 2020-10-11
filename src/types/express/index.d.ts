/* eslint-disable @typescript-eslint/no-unused-vars */
import { IUserSchema } from '@models/User'
import { IBlogSchema } from '@models/Blog'
import { ITaskSchema } from '@models/Task'
import { IProjectSchema } from '@models/Project'
import { RequestHandler } from 'express-jwt'
import { IReadListRequestDTO } from '@useCases/blog/read-list/ReadListDTO'

declare global {
  namespace Express {
    export interface Request {
      profile?: IUserSchema
      project?: IProjectSchema
      task?: ITaskSchema
      auth?: { _id: string }
      blog?: IBlogSchema
    }
  }
}
