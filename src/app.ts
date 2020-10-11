import express from 'express'
import authRoutes from './routes/User'
import projectRoutes from './routes/Project'
import taskRoutes from './routes/Task'
// import blogRoutes from './routes/Blog'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use(cors())
app.use('/api', authRoutes.router)
app.use('/api', projectRoutes.router)
app.use('/api', taskRoutes.router)

// ⁄app.use('/api', blogRoutes.router)

export { app }
