import styles from  '../assets/styles/layouts/TodoItem.module.scss';

export default function TodoItem({ todo, deleteTodo, updateTodo}) {
    // console.log(deleteTodo);

    const updateTodoFromApi = async (todoToUpdate) => {
        const  {_id, editable, ...payload} = todoToUpdate;
            
            try {
                const response = await fetch(`https://www.restapi.fr/api/todos/${todo._id}`, {
                    method: 'PATCH',
                    body: JSON.stringify(payload),
                    headers : {
                        'Content-Type': 'application/json'
                    }
                });

                if(response.ok){
                    const data = await response.json();

                    console.log(data);
                }
            } catch (error) {
                console.log('Erreur', error)
            }
        };

    const handleClickDelete = () => {
        const deleteTodoFromApi = async (id) => {
            try{
                const response = await fetch(`https://www.restapi.fr/api/todos/${id}`, {
                    method: 'DELETE'
                });

                if(response.ok){
                    const data = await response.json();
                    console.log(`Message reçu du serveur: ${data}`);
                }else {
                    console.log('Erreur')
                }
            }catch(error) {
                console.log('erreur', error)
            }
        };

        deleteTodoFromApi(todo._id);
        deleteTodo(todo._id); // supprimer la todo de l'état local du composant parent (le composant racine <App /> )
    }

    const handleClickValidate = () => {
        // console.log('bouton valider cliqué');
        updateTodo({...todo, done: !todo.done});
                updateTodoFromApi({...todo, done: !todo.done});

    }

 
    const handleClickEdit = () => {
        // console.log('bouton editer cliqué');
        updateTodo({...todo, editable: true});
    }

    return (   // markup de chaque item
        <li className="d-flex justify-content-between w-50 fs-4">
            <p className={`px-2 ${todo.done ? 'text-decoration-line-through' :''}`}>{todo.content}</p>
            <div className="d-flex gap-2">
                <i onClick={handleClickValidate} role="button" className={`bi bi-${todo.done ? 'check-' :''}square fs-2 text-secondary`}></i>
                <i onClick={handleClickEdit} role="button" className="bi bi-pencil-square fs-2"></i>
                <i onClick={handleClickDelete} role="button" className={`bi bi-trash3 fs-4 text-danger ${styles.trashIcon}`} ></i>
            </div>
        </li> 
    );
}