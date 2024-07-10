import ToDoForm from "../components/shared/ToDoForm"


const CreateTodo = () => {
    return (
        <div className="flex-1 flex flex-col">
            <ToDoForm action="Create" />
        </div>
    )
}

export default CreateTodo