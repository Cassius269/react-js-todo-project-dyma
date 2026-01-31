function todoReducer(state, action){
    switch(action.type) {
        case "ADD_TODO": 
            console.log('todo ajoutée');
            console.log(state);
            return {
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
                todoList : state.todoList.filter(todo => todo.id !== action.id)
            }
        case "TOGGLE_DONE_TODO":
            console.log('todo validée/non validée');
            return {
                todoList: state.todoList.map( todo => todo.id === action.id ? {...todo, done : !todo.done} : todo)
                };
        case "TOGGLE_EDIT_TODO":
            console.log('todo en modde édition');
            return {
                todoList: state.todoList.map( todo => todo.id === action.id ? {...todo, editable : !todo.editable} : todo)
            };  
        case "TOGGLE_UPDATE_TODO":
            console.log('todo mise à jour');
            return {
                todoList: state.todoList.map(todo => todo.id === action.id ? {...todo, content: action.content, editable : false} : todo )
            };
        default : {
            throw new Error('action inconnue');
        }     
    }
}

export default todoReducer;