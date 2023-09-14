import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
// import { app } from '../server'

const router = Router()

// GET localhost:3000/skills
router.get('/', skillsCtrl.index)

export { router }
