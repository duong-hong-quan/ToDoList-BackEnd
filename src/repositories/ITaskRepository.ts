export interface ITaskRepository {
  createTask(taskData: any): any;
  getTasks(): any;
  getTask(id: string): any;
  updateTask(id: string, taskData: any): any;
  deleteTask(id: string): any;
}
