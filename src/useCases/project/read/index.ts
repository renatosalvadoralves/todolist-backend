import { DbProjectRepository } from '@repositories/implementations/DbProjectRepository'
import { ReadUseCase } from './ReadUseCase'
import { ReadController } from './ReadController'

const dbProjectRepository = new DbProjectRepository()

const readUseCase = new ReadUseCase(dbProjectRepository)

const readController = new ReadController(readUseCase)

export { readUseCase, readController }
