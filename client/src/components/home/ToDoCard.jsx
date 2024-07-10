/* eslint-disable react/prop-types */
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatDistanceToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import { filterValues } from '../../constants';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteToDo, getAllTodos, updateStatus } from '../../redux/toDoListSlice';
import { toast } from 'react-toastify';


const ToDoCard = React.memo(({ item }) => {

    const relativeTime = formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })
    
    const [ showStatus, setShowStatus ] = useState(false)

    const dispatch = useDispatch()

    const handleUpdateStatus = async (status) => {
        try {
            await dispatch(updateStatus({ status, id: item?._id })).unwrap()
            dispatch(getAllTodos())
            setShowStatus(false)
        } catch (error) {
            toast.error(error.message)
        }
    }

    const handleDelete = async () => {
        try {
            await dispatch(deleteToDo({ id: item?._id  }))
            dispatch(getAllTodos())
        } catch (error) {
            toast.error(error.message)
        }
    }
    
    return (
        <div className="bg-dark-2 p-3 rounded-xl shadow-shadow-1 flex flex-col hover:shadow-shadow-2">
            <div className='flex justify-between'>
                <h2 className={`leading-[130%] font-semibold flex-1 ${item.status === 'Completed' && 'line-through'}`}>{item?.title}</h2>
                <Link to={`/update/${item?._id}`}>
                    <FontAwesomeIcon icon={faEdit} className='text-2xl' />
                </Link>
            </div>
            <div className='flex-1 flex flex-col justify-center mt-2'>
                <p className='text-sm'>{item?.description}</p>
            </div>
            <div className='flex justify-between items-end cursor-pointer mt-3'>
                <div className='bg-red-500 rounded-lg px-2 py-1' onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </div>
                <div className='relative'>
                    <div onClick={() => setShowStatus(prev => !prev)}>
                        <p className='text-sm bg-dark-3 p-2 rounded-md'>Status: {item?.status} <FontAwesomeIcon icon={faChevronDown} className='ml-1' /></p>
                        <p className='text-right text-xs text-white/50 mt-0.5'>{relativeTime}</p>
                    </div>
                    {showStatus && <div className='absolute z-10 w-[160px] right-0 top-10 bg-dark-3 rounded-lg'>
                        {filterValues?.slice(1)?.map((status, index) => (
                            <p key={status} className={`${index < 1 && 'border-b'} px-2 py-1.5 bg-dark-3 hover:opacity-50 ${index === 0 ? 'rounded-t-md' : index === 1 ? 'rounded-b-md' : ''}`} onClick={() => handleUpdateStatus(status)}>{status}</p>
                        ))}
                    </div>}
                </div>
            </div>
        </div>
    )
})

export default ToDoCard