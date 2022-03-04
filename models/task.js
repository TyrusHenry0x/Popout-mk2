import mongoose from "mongoose";
const Schema = mongoose.Schema
const Task = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true }
)
export default mongoose.model('tasks', Task)