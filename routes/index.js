import { Router } from 'express'
import tasksRoutes from './tasks.js'
import usersRoutes from './users.js'

const router = Router()

router.get('/', (req, res) => res.send("This is the api root!"))

router.use("/", usersRoutes)
router.use("/", tasksRoutes)

export default router;