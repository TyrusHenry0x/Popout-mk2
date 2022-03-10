import Task from '../models/task.js'

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getTask = async (req, res) => {
  try {
    const { id } = req.params
    const task = await Task.findById(id)
    if (tasj) {
      return res.json(task)
    }
    res.status(404).json({ message: 'Task not found!' })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

export const createTask = async (req, res) => {
  try {
    const task = new Task(req.body)
    await task.save()
    res.status(201).json(task)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateTask = async (req, res) => {
  const { id } = req.params
  const task = await Task.findByIdAndUpdate(id, req.body, { new: true })
  res.status(200).json(task)
}

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Task.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Task deleted')
    }
    throw new Error('Task not found')
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}