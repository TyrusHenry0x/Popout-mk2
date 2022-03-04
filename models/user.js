import mongoose from 'mongoose'
const Schema = mongoose.Schema
const User = new Schema(
  {
    name: { type: String, required: true, },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
    task_list: [
      {
        car: { type: String },
        name: { type: String },
        description: { type: String },
        completed: {type: Boolean },
      },
    ],
  },
  { timestamps: true }
)
export default mongoose.model('users', User)