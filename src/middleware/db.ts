import mongoose from 'mongoose'

mongoose.Promise = Promise

mongoose.connection.on('connected', () => {
  console.log('Connection Established DB')
})

mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished DB')
})

mongoose.connection.on('disconnected', () => {
  console.log('Connection Disconnected DB')
})

mongoose.connection.on('close', () => {
  console.log('Connection Closed DB')
})

mongoose.connection.on('error', (error) => {
  console.log('ERROR: ' + error)
})

const run = async () => {
  await mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
}

run().catch((error) => console.error(error))
