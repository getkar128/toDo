import dotenv from "dotenv"
dotenv.config()
import express from "express"
import mongoose from "mongoose"
import path from 'path'
import toDoRouter from './routes/todo.route.js'
import cors from 'cors'
import corsOptions from "./config/corsOptions.js"

const PORT = process.env.PORT || 3500

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log(err)
})

const __dirname = path.resolve()

const app = express()

app.use(cors(corsOptions))
app.use(express.json())

app.use('/api', toDoRouter)

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

