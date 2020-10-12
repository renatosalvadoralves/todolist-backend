import { DbTaskRepository } from "@repositories/implementations/DbTaskRepository";
import { ReadListUseCase } from "./ReadListUseCase";
import { ReadListController } from "./ReadListController";

const dbTaskRepository = new DbTaskRepository();

const readListUseCase = new ReadListUseCase(dbTaskRepository);

const readListController = new ReadListController(readListUseCase);

export { readListUseCase, readListController };
