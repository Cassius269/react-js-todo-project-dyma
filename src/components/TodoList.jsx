import EditTodo from "./EditTodo"
import TodoItem from "./TodoItem"

export default function TodoList({todoList, deleteTodo, toggleTodo, toggleEditTodo, updateTodo}){
    // console.log(todoList);

    // Gérer le cas où il n'y a pas de todo
    if(!todoList || todoList.length == 0){
        return <p>Pas de tâches à faire</p>
    }

    return (
        <>
            <h2 className="mt-4">Les todos</h2>
            <ul>
                { todoList.map(todo => todo.editable ? (
                    <EditTodo 
                        key={todo._id}
                        todo = {todo} 
                        updateTodo = { updateTodo}
                        toggleEditTodo = {toggleEditTodo}
                    />
                    ) 
                    :
                    (<TodoItem 
                                key={ todo._id } 
                                todo = { todo } 
                                deleteTodo = { deleteTodo} 
                                toggleTodo={ toggleTodo }
                                toggleEditTodo = { toggleEditTodo }
                                EditTodo = { () => toggleEditTodo(todo.id)}
                    />)
                ) }
            </ul>
        </>
    )
}