import { useContext, useState } from "react";
import styles from '../assets/styles/layouts/EditTodoForm.module.scss';
import { TodoDispatcherContext } from "../context/TodoContext";

function EditTodo({ todo }) {
    const dispatch = useContext(TodoDispatcherContext);

    const [value, setValue] = useState(todo.content);

    const handleSubmit = (e) => {
        e.preventDefault(); // désactiver le comportement par défaut
        if(value.length) {
            dispatch(
                {
                    type: 'TOGGLE_UPDATE_TODO',
                    id : todo.id,
                    content :value
                }
            )
        }
    }

    const handleInputContentTodo = (e) => {
        const valueInput = e.target.value;
        setValue(valueInput);
        console.log(value);
    }

    // Passer en mode lecture
    const handleClickCancel = () => {
        dispatch({
            type: 'TOGGLE_EDIT_TODO', 
            id : todo.id
        })
    }

    const handleKeyDown = (e) => {
        console.log(e.key);
        if(e.key === 'Escape') { // quitter le mode édition en appuyant le bouton "Eescape"
        dispatch({
            type: 'TOGGLE_EDIT_TODO', 
            id : todo.id
        })        
    }
    }

    return (
            <form onSubmit={handleSubmit} action="#" method="POST" className={`d-flex justify-content-between w-100 mb-3 ${styles.form}`}>
                <input autoFocus onKeyDown = { handleKeyDown } onInput={handleInputContentTodo} type="text" value={value} className="form-control w-50" />
                <div className="d-flex gap-2">
                    <button onClick={handleClickCancel} type="button" className="btn btn-danger">Annuler</button>
                    <input type="submit" className="btn btn-success form-control" value="Sauvegarder" />
                </div>  
            </form>
    )
}

export default EditTodo;