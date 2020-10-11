import { Document, model, Schema } from 'mongoose'
import { IProjectSchema } from '@models/Project'
import { IUserSchema } from '@models/User'

export interface ITaskSchema extends Document {
  isCompleted: boolean
  description: string
  user: IUserSchema
  project: IProjectSchema
  publishedAt: Date
  expireAt: Date
}

const taskSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true
    }
  },
  { timestamps: true }
)
export default model<ITaskSchema>('Task', taskSchema)
