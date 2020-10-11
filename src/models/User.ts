import { Document, model, Schema } from 'mongoose'
import crypto from 'crypto'
import isEmail from 'validator/lib/isEmail'
import { v4 as uuidv4 } from 'uuid'

export interface IUserSchema extends Document {
  authenticate?(password: string)
  _id: string
  name: string
  email: string
  hashedPassword: string
  salt?: string
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: 32,
      validate: [isEmail, 'invalid email']
    },
    hashedPassword: {
      type: String,
      required: true
    },
    salt: String
  },
  { timestamps: true }
)

userSchema
  .virtual('password')
  .set(function (password) {
    this._password = password
    this.salt = uuidv4()
    this.hashedPassword = this.encryptPassword(password)
  })
  .get(function () {
    return this._password
  })

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashedPassword
  },
  encryptPassword: function (password) {
    if (!password) {
      return ''
    }

    try {
      return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
    } catch (error) {
      return ''
    }
  }
}

export default model<IUserSchema>('User', userSchema)
