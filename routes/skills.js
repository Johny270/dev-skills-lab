import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'
// import { app } from '../server'

const router = Router()

// GET localhost:3000/skills
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.post('/', skillsCtrl.create)
router.delete('/:skillId', skillsCtrl.delete)
router.get('/:skillId', skillsCtrl.show)


export { router }
