import { useDispatch, useSelector } from "react-redux"
import { getAllTodos, selectTodoList } from "../redux/toDoListSlice"
import ToDoCard from "../components/home/ToDoCard"
import { useEffect, useState } from "react"
import Filters from "../components/home/Filters"
import { useNavigate } from "react-router-dom"


const Home = () => {

    const { loading, error, toDo: allToDos } = useSelector(selectTodoList)

    const [ toDoList, setToDoList ] = useState(allToDos)
    const [ filterValue, setFilterValue ] = useState('All')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (filterValue === 'All'){
            setToDoList(allToDos)
        }else if(filterValue === 'In Progress'){
            setToDoList(allToDos.filter((item) => item.status === 'In Progress'))
        }else{
            setToDoList(allToDos.filter((item) => item.status === 'Completed'))
        }
    }, [allToDos, filterValue])

    if(loading){
        return <div className="flex-1 flex items-center justify-center">
            Loading...
        </div>
    }

    if(error){
        return <div className="flex-1 flex flex-col items-center justify-center">
            <p>Something Went Wrong</p>
            <div className="bg-btn-1 px-3 py-1.5 rounded-md text-white mt-2 cursor-pointer" onClick={() =>{
                dispatch(getAllTodos())
            }}>
                Click To Refresh
            </div>
        </div>
    }

    if (allToDos?.length === 0){
        return <div className="flex-1 flex flex-col items-center justify-center">
            <p>Nothing To Show!</p>
            <div className="bg-btn-1 px-3 py-1.5 rounded-md text-white mt-2 cursor-pointer" onClick={() => navigate('/create')}>
                Create ToDo
            </div>
        </div>
    }

    return (
        <div className="flex-1 flex flex-col">
            <Filters 
                filterValue={filterValue}
                setFilterValue={setFilterValue}
            />
            {toDoList?.length > 0 ? <div className="mt-4 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {toDoList.map((item, index) => (
                    <ToDoCard key={index} item={item} />
                ))}
            </div> : <div className="flex-1 flex flex-col items-center justify-center">
                <h3>{filterValue} is Empty!</h3>
            </div>}
        </div>
    )
}

export default Home