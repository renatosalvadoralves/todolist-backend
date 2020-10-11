import { Document, model, Schema } from 'mongoose'
import { IUserSchema } from '@models/User'
import { ITaskSchema } from '@models/Task'

export interface IProjectSchema extends Document {
  name: string
  user: IUserSchema
  tasks: ITaskSchema[]
}

const projectSchema = new Schema({
  name: {
    type: String,
    trim: true,
    unique: 32,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
      default: []
    }
  ]
})
export default model<IProjectSchema>('Project', projectSchema)
