import { useContext } from "react"
import EditTodo from "./EditTodo"
import TodoItem from "./TodoItem"
import { TodoStateContext } from "../context/TodoContext"

export default function TodoList(){
    const state = useContext(TodoStateContext);
    console.log('TodoList state:', state);  // 👈 Debug    

    // Gérer le cas où il n'y a pas de todo
    if(!state.todoList || state.todoList.length == 0){
        return <p className="text-info">Pas de tâche(s) à faire</p>
    }

    return (
        <>
            <h2 className="mt-4">Les todos</h2>
            <ul>
                { state.todoList.map(todo => todo.editable ? (
                    <li key={ todo.id }>
                        <EditTodo 
                            todo = {todo} 
                        />
                    </li>
                    ) 
                    :
                    (<TodoItem 
                                key={ todo.id } 
                                todo = { todo } 
                    />)
                ) }
            </ul>
        </>
    )
}