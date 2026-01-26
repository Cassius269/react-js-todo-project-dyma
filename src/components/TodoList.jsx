import TodoItem from "./TodoItem"

export default function TodoList({todoList, deleteTodo}){
    // console.log(todoList);

    // Gérer le cas où il n'y a pas de tdo
    if(!todoList || todoList.length == 0){
        return <p>Pas de tâches à faire</p>
    }

    return (
        <>
            <h2 className="mt-4">Les todos</h2>
            <ul>
                { todoList.map(todo => {
                    return  <TodoItem 
                                key={ todo.id } 
                                todo = { todo } 
                                deleteTodo = { deleteTodo} 
                            />
                }) }
            </ul>
        </>
    )
}