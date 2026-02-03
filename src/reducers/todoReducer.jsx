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
        case "TOGGLE_DONE_TODO":
            console.log('todo validée/non validée');
            return {
                ...state,
                todoList: state.todoList.map( todo => todo.id === action.id ? {...todo, done : !todo.done} : todo)
                };
        case "TOGGLE_EDIT_TODO":
            console.log('todo en mode édition');
            return {
                ...state,
                todoList: state.todoList.map( todo => todo.id === action.id ? {...todo, editable : !todo.editable} : todo)
            };  
        case "TOGGLE_UPDATE_TODO":
            console.log('todo mise à jour');
            return {
                ...state,
                todoList: state.todoList.map(todo => todo.id === action.id ? {...todo, content: action.content, editable : false} : todo )
            };
        case "SET_THEME": 
             console.log('changement de thème')
            return {
                ...state, 
                theme: action.theme
            }
        default : 
            throw new Error('action inconnue');  
    }
}

export default todoReducer;