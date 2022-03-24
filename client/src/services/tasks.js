import api from "./apiConfig";

export const getTasks = async () => {
  try {
    const response = await api.get('/tasks')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getTask = async id => {
  try {
    const response = await api.get(`/tasks/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createTask = async task => {
  try {
    const response = await api.post('/tasks', task)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateTask = async (id, task) => {
  try {
    const response = await api.put(`/tasks/${id}`, task)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteTask = async id => {
  try {
    const response = await api.delete(`/tasks/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}