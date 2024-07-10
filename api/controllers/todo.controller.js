import ToDo from "../models/todo.model.js"
import { errorHandler } from "../utils/error.js"

export const getToDoList = async (req, res, next) => {
    try {
        const allTodos = await ToDo.find()
        res.status(200).json({ data: allTodos })
    } catch (error) {
        next(error)
    }
}

export const createToDo = async (req, res, next) => {
    const { title, description, status } = req.body
    try {

        if (!title || !description){
            return next(errorHandler(404, 'Title or Description Not Found!'))
        }
        
        const validTitle = await ToDo.findOne({ title })
        if (validTitle){
            return next(errorHandler(409, 'Title Already Exists!'))
        }
        const newTodo = new ToDo({ title, description, status: status || 'In Progress' })
        newTodo.save()
        res.status(201).json({message: 'ToDo Successfully Created!'})
    } catch (error) {
        next(error)
    }
}

export const updateToDo = async (req, res, next) => {
    const existingTodo = await ToDo.findById(req.params.id)
    if (!existingTodo){
        return next(errorHandler(404, 'ToDo not found'))
    }
    const { title } = req.body
    try {
        const existingItem = await ToDo.findOne({ title });
        if (existingItem && existingItem._id.toString() !== req.params.id) {
            return res.status(400).json({ message: 'Title already in use' });
        }
        const updatedTodo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({
            data: updatedTodo
        })
    } catch (error) {
        next(error)
    }
}

export const updateStatus = async (req, res, next) => {
    const existingTodo = await ToDo.findById(req.params.id)
    if (!existingTodo){
        return next(errorHandler(404, 'ToDo not found'))
    }
    const { status } = req.body
    try {
        const updatedTodo = await ToDo.findByIdAndUpdate(req.params.id, { status }, {new: true})
        res.status(200).json({
            data: updatedTodo
        })
    } catch (error) {
        next(error)
    }
}

export const deleteToDo = async (req, res, next) => {
    const existingTodo = await ToDo.findById(req.params.id)
    if (!existingTodo){
        return res.status(201).json({ message: 'ToDo not exist' })
    }
    try {
        const respones = await ToDo.findByIdAndDelete(req.params.id)
        res.status(200).json('ToDo has been deleted')
    } catch (error) {
        next(error)
    }
}