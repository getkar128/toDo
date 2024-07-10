import express from 'express'
import { createToDo, deleteToDo, getToDoList, updateStatus, updateToDo } from '../controllers/todo.controller.js'

const router = express.Router()

router.get('/all', getToDoList)
router.post('/create', createToDo)
router.put('/update/:id', updateToDo)
router.patch('/update/:id', updateStatus)
router.delete('/delete/:id', deleteToDo)

export default router