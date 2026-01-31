function todoReducer(state, action){
    switch(action.type) {
        case "ADD_TODO": 
            console.log('todo ajoutée');
            console.log(state);
            return {
                ...state, 
                todoList: [...state.todoList, 
                   { 
                    id: crypto.randomUUID(),
                    content: action.content,
                    editable: false, 
                    done: false}
                ]
            };
        case "DELETE_TODO":
            console.log('todo supprimé');
            console.log(state.todoList)
            return {
                ...state, 
                todoList : state.todoList.filter(todo => todo.id !== action.id)
            }
        case "TOGGLE_TODO":
            console.log('todo validée/non validée');
            return {
                ...state,
                todoList: state.todoList.map( todo => todo.id === action.id ? {...todo, done : !todo.done} : todo)
                };
        case "TOGGLE_EDIT_TODO":
            console.log('todo en modde édition');
            return {
                ...state, 
                todoList: state.todoList.map( todo => todo.id === action.id ? {...todo, editable : !todo.editable} : todo)
            };  
        case "TOGGLE_UPDATE_TODO":
            console.log('todo mise à jour');
            return {
                ...state, 
                todoList: state.todoList.map(todo => todo.id === action.id ? {...todo, content: action.content} : todo )
            };
        default : {
            throw new Error('action inconnue');
        }     
    }
}

export default todoReducer;