import { useState } from 'react'
import { filterValues } from '../../constants'
import { useDispatch } from 'react-redux'
import { createToDo, getAllTodos, updateToDo } from '../../redux/toDoListSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ToDoForm = ({ action, toDo }) => {

    const [ formData, setFormData ] = useState({
        title: toDo ? toDo.title : '',
        description: toDo ? toDo.description : '',
        status: toDo ? toDo.status : 'In Progress'
    })
    const [ titleError, setTitleError ] = useState(false)
    const [ descriptionError, setDescriptionError ] = useState(false)

    const { title, description, status } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title){
            return setTitleError(true)
        }
        if (!description){
            return setDescriptionError(true)
        }
        try {
            if (action === 'Create'){
                await dispatch(createToDo({ ...formData})).unwrap()
                toast.success('Successfully Created')
            }
            if (action === 'Update'){
                await dispatch(updateToDo({ ...formData, id: toDo._id })).unwrap()
                toast.success('Successfully Updated')
            }
            dispatch(getAllTodos())
            navigate('/')
        } catch (error) {
            console.log("this is error", error)
            toast.error(error.message)
        }
        
    }

    const handleChange = (e) => {
        if (e.target.id === 'description' && descriptionError){
            setDescriptionError(false)
        }
        if (e.target.id === 'title' && descriptionError){
            setTitleError(false)
        }
        setFormData(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
    }
    
    return (
        <div className='w-full max-w-xl mx-auto'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <label className='form-label' htmlFor='title'>Title</label>
                    <input 
                        type='text'
                        placeholder='Title'
                        className='form-input'
                        value={title}
                        onChange={handleChange}
                        id='title'
                    />
                    {titleError && <p className='text-red-500 text-xs italic mt-0.5'>Please Enter Title</p>}
                </div>
                <div className='flex flex-col'>
                    <label className='form-label' htmlFor='description'>Description</label>
                    <textarea
                        type='text'
                        placeholder='Description'
                        rows={8}
                        className='form-input'
                        value={description}
                        onChange={handleChange}
                        id='description'
                    />
                    {descriptionError && <p className='text-red-500 text-xs italic mt-0.5'>Please Enter Description</p>}
                </div>
                <div className='flex flex-col'>
                    <label className='form-label' htmlFor='status'>Status</label>
                    <select value={status} id='status' onChange={handleChange} className="form-input cursor-pointer">
                        {filterValues?.slice(1, 3).map((option, index) => (
                        <option key={index} value={option} className=''>
                            {option}
                        </option>
                        ))}
                    </select>
                </div>
                <button type='submit' className='bg-btn-1 font-semibold sm:text-lg py-2 rounded-xl mt-8'>
                    {action} ToDo
                </button>
            </form>
        </div>
    )
}

export default ToDoForm