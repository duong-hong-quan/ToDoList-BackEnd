import { ITaskService } from "../services/ITaskService";
import { Request, Response } from "express";
import {
  controller,
  httpGet,
  httpPost,
  httpPut,
} from "inversify-express-utils";
import { inject } from "inversify";
import { TaskService } from "../services/TaskService";

@controller("/task")
export class TaskController {
  constructor(@inject(TaskService) private taskService: TaskService) {}

  @httpPost("/")
  async createTask(req: Request, res: Response) {
    try {
      const { name, startDate, endDate } = req.body;
      const task = await this.taskService.createTask({
        name,
        startDate,
        endDate,
      });
      return res.status(200).json(task);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  @httpGet("/")
  async getTasks(req: Request, res: Response) {
    try {
      const tasks = await this.taskService.getTasks();
      return res.status(200).json(tasks);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  @httpGet("/:id")
  async getTask(req: Request, res: Response) {
    try {
      const task = await this.taskService.getTask(req.params.id);
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      return res.status(200).json(task);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
  @httpPut("/:id")
  async updateTask(req: Request, res: Response) {
    try {
      const task = await this.taskService.updateTask(req.params.id, req.body);
      return res.status(200).json(task);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  deleteTask = async (req: Request, res: Response) => {
    try {
      await this.taskService.deleteTask(req.params.id);
      return res.status(200).json({ message: "Task deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
}
