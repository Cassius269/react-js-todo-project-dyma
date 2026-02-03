import { useContext } from 'react';
import styles from  '../assets/styles/layouts/TodoItem.module.scss';
import { TodoDispatcherContext } from '../context/TodoContext';

export default function TodoItem({ todo }) {
    const dispatch = useContext(TodoDispatcherContext);

    const handleClickDelete = () => {
        dispatch(
            {
                type: 'DELETE_TODO',
                id : todo.id
            }
        );
    }

    const handleClickValidate = () => {
        console.log('bouton valider cliqué');
        dispatch({
                    type: 'TOGGLE_DONE_TODO',
                    id: todo.id
        });    
    }

 
    const handleClickEdit = () => {
        console.log('bouton editer cliqué');
        dispatch(
            {
                type: 'TOGGLE_EDIT_TODO',
                id : todo.id 
            }
            )    
    }

    return (   // markup de chaque item
        <li className="d-flex justify-content-between align-items-end w-50 fs-5">
            <p className={`px-2 ${todo.done ? 'text-decoration-line-through' :''}`}>{todo.content}</p>
            <div className="d-flex gap-2">
                <i onClick={handleClickValidate} role="button" className={`bi bi-${todo.done ? 'check-' :''}square fs-2 text-secondary`}></i>
                <i onClick={handleClickEdit} role="button" className="bi bi-pencil-square fs-2"></i>
                <i onClick={handleClickDelete} role="button" className={`bi bi-trash3 fs-4 text-danger ${styles.trashIcon}`} ></i>
            </div>
        </li> 
    );
}