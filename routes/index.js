import { Router } from 'express'
import taskRoutes from './tasks.js'
import userRoutes from './users.js'

const router = Router()

router.get('/', (req, res) => res.send("This is the api root!"))

router.use("/", usersRoutes)
router.use("/", tastsRoutes)

export default router;