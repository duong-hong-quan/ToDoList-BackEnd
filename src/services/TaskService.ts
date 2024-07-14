import { TaskModel } from "../entities/task";
import { AppActionResult } from "../dto/AppActionResult";
import { ITaskService } from "./ITaskService";
import { buildAppActionResultError, formatDate } from "../helpers";
import { inject, injectable } from "inversify";
import { ITaskRepository } from "../repositories/ITaskRepository";
import { TaskRepository } from "../repositories/TaskRepository";
@injectable()
export class TaskService implements ITaskService {
  constructor(@inject(TaskRepository) private taskRepository: TaskRepository) {}

  async createTask(taskData: any): Promise<AppActionResult> {
    let result = new AppActionResult();

    if (taskData.name == null || taskData.name == "") {
      result = buildAppActionResultError("Name is required", result);
      return result;
    }
    if (taskData.name.length > 80) {
      result = buildAppActionResultError("Name is too long", result);
    }
    if (
      taskData.startDate == null ||
      taskData.startDate == "" ||
      taskData.startDate == undefined ||
      taskData.endDate == null ||
      taskData.endDate == "" ||
      taskData.endDate == undefined
    ) {
      result = buildAppActionResultError(
        "Start and end date are required",
        result
      );
    }
    if (taskData.startDate > taskData.endDate) {
      result = buildAppActionResultError(
        "Start date must be before end date",
        result
      );
    }
    taskData.startDate = formatDate(taskData.startDate);
    taskData.endDate = formatDate(taskData.endDate);
    try {
      const task = new TaskModel(taskData);
      await this.taskRepository.createTask(task);
    } catch (error: any) {
      result = buildAppActionResultError(error.message, result);
    }

    return result;
  }
  async getTasks(): Promise<AppActionResult> {
    let result = new AppActionResult();
    try {
      const tasks = await this.taskRepository.getTasks();
      result.setData(tasks);
    } catch (error: any) {
      result = buildAppActionResultError(error.message, result);
    }
    return result;
  }
  async getTask(id: string): Promise<AppActionResult> {
    let result = new AppActionResult();
    try {
      const task = await this.taskRepository.getTask(id);
      if (!task) {
        result = buildAppActionResultError("Task not found", result);
      }
      result.setData(task);
    } catch (error: any) {
      result = buildAppActionResultError(error.message, result);
    }
    return result;
  }
  async updateTask(id: string, taskData: any): Promise<AppActionResult> {
    let result = new AppActionResult();
    if (taskData.name == null || taskData.name == "") {
      result = buildAppActionResultError("Name is required", result);
      return result;
    }
    if (taskData.name.length > 80) {
      result = buildAppActionResultError("Name is too long", result);
    }
    if (
      taskData.startDate == null ||
      taskData.startDate == "" ||
      taskData.startDate == undefined ||
      taskData.endDate == null ||
      taskData.endDate == "" ||
      taskData.endDate == undefined
    ) {
      result = buildAppActionResultError(
        "Start and end date are required",
        result
      );
    }
    if (taskData.startDate > taskData.endDate) {
      result = buildAppActionResultError(
        "Start date must be before end date",
        result
      );
    }
    taskData.startDate = formatDate(taskData.startDate);
    taskData.endDate = formatDate(taskData.endDate);
    try {
      const task = this.taskRepository.updateTask(id, taskData);
      if (!task) {
        result = buildAppActionResultError("Task not found", result);
      }
      result.setData(task);
    } catch (error: any) {
      result = buildAppActionResultError(error.message, result);
    }
    return result;
  }
  async deleteTask(id: string): Promise<AppActionResult> {
    let result = new AppActionResult();
    try {
      const task = await this.taskRepository.deleteTask(id);
      if (!task) {
        result = buildAppActionResultError("Task not found", result);
      }
    } catch (error: any) {
      result = buildAppActionResultError(error.message, result);
    }
    return result;
  }
}
