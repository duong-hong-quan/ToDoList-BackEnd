import { AppActionResult } from "../dto/AppActionResult";
export interface ITaskService {
  createTask(taskData: any): Promise<AppActionResult>;
  getTasks(): Promise<AppActionResult>;
  getTask(id: string): Promise<AppActionResult>;
  updateTask(id: string, taskData: any): Promise<AppActionResult>;
  deleteTask(id: string): Promise<AppActionResult>;
}
