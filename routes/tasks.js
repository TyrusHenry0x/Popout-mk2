import { Router } from "express";
import * as controllers from '../controllers/tasks'
import restrict from '../helpers/restrict.js'

const router = Router()

router.get('/tasks', controllers.getTasks)
router.get('/tasks/:id', controllers.getTast)
router.post('/tasks', controllers.createTask)
router.put('/cars/:id', controllers.updateTask)
router.delete('/tasks/:id', controllers.deleteTask)

export default router;