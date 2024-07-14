import { TaskModel } from "../entities/task";
import { ITaskRepository } from "./ITaskRepository";
import { injectable } from "inversify";

@injectable()
export class TaskRepository implements ITaskRepository {
  getTasks = async () => (await TaskModel.find()).map((doc) => doc.toObject());

  getTask = async (id: string) => {
    const result = await TaskModel.findById(id);
    return result ? result.toObject() : null;
  };

  createTask = async (data: Record<string, any>) => {
    const result = await new TaskModel(data).save();
    return result.toObject();
  };

  updateTask = async (id: string, data: Record<string, any>) => {
    const result = await TaskModel.findByIdAndUpdate(id, data, { new: true });
    return result ? result.toObject() : null;
  };

  deleteTask = async (id: string) => {
    const result = await TaskModel.findByIdAndDelete(id);
    return result ? result.toObject() : null;
  };
}
