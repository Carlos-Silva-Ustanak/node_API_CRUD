const express  = require('express');
const taskController = require('./controllers/tasksController')
const tasksMiddleware = require('./middleware/tasksMiddleware')

const router = express.Router()

router.get('/tasks', taskController.getAll);
router.post('/tasks',tasksMiddleware.validateBody, taskController.createTasks);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id',tasksMiddleware.validateBody, tasksMiddleware.validateStatus ,taskController.updateTask);


module.exports = router;