import mongoose from "mongoose"

const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'In Progress'
    },
}, { timestamps: true })

const ToDo = mongoose.model('ToDo', toDoSchema)

export default ToDo