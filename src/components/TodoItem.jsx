import styles from  '../assets/styles/layouts/TodoItem.module.scss';

export default function TodoItem({ todo, deleteTodo, toggleTodo, toggleEditTodo }) {
    // console.log(deleteTodo);

    const handleClickDelete = () => {
        const deleteTodoFromApi = async (id) => {
            try{
                const response = await fetch(`https://www.restapi.fr/api/rtodo/${id}`, {
                    method: 'DELETE'
                });

                if(response.ok){
                    const data = await response.json();
                    console.log(`Message reçu du serveur: ${data}`);
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
        toggleTodo(todo._id);
    }

 
    const handleClickEdit = () => {
        // console.log('bouton editer cliqué');
        toggleEditTodo(todo._id);
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