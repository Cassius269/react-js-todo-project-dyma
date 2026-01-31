import EditTodo from "./EditTodo"
import TodoItem from "./TodoItem"

export default function TodoList({todoList, deleteTodo, toggleTodoDone, toggleEditTodo, updateTodo}){
    // console.log(todoList);

    // Gérer le cas où il n'y a pas de todo
    if(!todoList || todoList.length == 0){
        return <p className="text-info">Pas de tâche(s) à faire</p>
    }

    return (
        <>
            <h2 className="mt-4">Les todos</h2>
            <ul>
                { todoList.map(todo => todo.editable ? (
                    <li key={ todo.id }>
                        <EditTodo 
                            todo = {todo} 
                            updateTodo = { updateTodo}
                            toggleEditTodo = {toggleEditTodo}
                        />
                    </li>
                    ) 
                    :
                    (<TodoItem 
                                key={ todo.id } 
                                todo = { todo } 
                                deleteTodo = { deleteTodo} 
                                toggleTodoDone={ toggleTodoDone }
                                toggleEditTodo = { toggleEditTodo }
                                EditTodo = { () => toggleEditTodo(todo.id)}
                    />)
                ) }
            </ul>
        </>
    )
}