import 'dotenv/config'
import { app } from './app'
import './middleware/db'

app.listen(3333)
