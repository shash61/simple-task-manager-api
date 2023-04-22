const express= require('express')
const router = express.Router()
const taskController = require('../../controllers/tasks')

router.get('/', taskController.getAllTasks)
router.get('/:id', taskController.getTaskById)
router.post('/', taskController.createTask)
router.put('/:id', taskController.editTaskById)
router.delete('/:id', taskController.removeTaskById)
module.exports = router