import { TodoStateContext, TodoDispatcherContext } from '../context/TodoContext'; // récupeer le contexte de l'état des todos et du dispatcher
import todoReducer from '../reducers/todoReducer';
import { useReducer } from 'react';

function TodoProvider({children}) {
  // Gestion du reducer de todo
  const [state, dispatch] = useReducer(todoReducer, 
    {
      todoList: []
    },
  );

  
    return (
        <TodoStateContext value= {state}>
            <TodoDispatcherContext value={dispatch}>
                        { children }
            </TodoDispatcherContext>
        </TodoStateContext>
    )
}

export default TodoProvider;