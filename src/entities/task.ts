import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: false },
  endDate: { type: Date, required: false },
});

export const TaskModel = mongoose.model("Task", taskSchema);
