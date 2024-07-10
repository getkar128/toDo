import { useParams } from "react-router-dom"
import ToDoForm from "../components/shared/ToDoForm"
import { useSelector } from "react-redux"
import { selectToDoById } from "../redux/toDoListSlice"


const UpdateTodo = () => {

    const { id } = useParams()

    const toDo = useSelector(state => selectToDoById(state, id))
    
    return (
        <div className="flex-1 flex flex-col">
            <ToDoForm toDo={toDo} action="Update" />
        </div>
    )
}

export default UpdateTodo