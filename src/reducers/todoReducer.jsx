function todoReducer(state, action){
    switch(action.type){
        case 'TODO_FETCH': 
            console.log('Récupérer tous les todos');
            return {
                // traitement à faire
                ...state, 
                todoList: Array.isArray(action.todos)
                            ? [...action.todos]   // plusieurs todos à l'aide de la destructuration de tableau
                            : [action.todos]
            }
        case 'TODO_CREATE': 
            console.log('Créer un todo');
            return {
                ...state, 
                todoList: [...state.todoList, action.todo]   
            };
        case 'TODO_UPDATE':
            console.log('Mettre à jour un todo');
            return {
                ...state, 
                todoList: state.todoList.map(t => t._id === action.todo._id ? action.todo : t) // remplacer la todo précédente ayant ID similaire contre la nouvelle todo
            };
        case 'TODO_DELETE':
            console.log('Supprimer un todo');
           return {
                ...state, 
                todoList: state.todoList.filter(t => t._id !== action._id)
            };
        default: {
            throw new Error('Action inconnue');
        }
    }
}

export default todoReducer;