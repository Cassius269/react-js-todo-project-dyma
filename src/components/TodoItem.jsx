import styles from  '../assets/styles/layouts/TodoItem.module.scss';

export default function TodoItem({ todo, deleteTodo, toggleTodo, toggleEditTodo }) {
    // console.log(deleteTodo);

    const handleClickDelete = () => {
        deleteTodo(todo._id);
    }

    const handleClickValidate = () => {
        // console.log('bouton valider cliqué');
        toggleTodo(todo.id);
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