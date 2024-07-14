import { Container } from "inversify";
import { TaskController } from "./controllers/TaskController";
import { TaskService } from "./services/TaskService";
import { TaskRepository } from "./repositories/TaskRepository";

const container = new Container();
container.bind<TaskController>(TaskController).toSelf();
container.bind<TaskService>(TaskService).toSelf();
container.bind<TaskRepository>(TaskRepository).toSelf();
export default container;
