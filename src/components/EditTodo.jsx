import { useState } from "react";
import styles from '../assets/styles/layouts/EditTodoForm.module.scss';

function EditTodo({ todo, updateTodo, toggleEditTodo }) {
    const [value, setValue] = useState(todo.content);

    const handleSubmit = (e) => {
        e.preventDefault(); // désactiver le comportement par défaut
        if(value.length) {
            updateTodo(todo.id, value);
            // toggleEditTodo(todo.id);
        }
    }

    const handleInputContentTodo = (e) => {
        const valueInput = e.target.value;
        setValue(valueInput);
        console.log(value);
    }

    // Passer en mode lecture
    const handleClickCancel = () => {
        toggleEditTodo(todo.id);
    }

    const handleKeyDown = (e) => {
        console.log(e.key);
        if(e.key === 'Escape') { // quitter le mode édition en appuyant le bouton "Eescape"
            toggleEditTodo(todo.id); 
        }
    }

    return (
            <form onSubmit={handleSubmit} action="#" method="POST" className="d-flex justify-content-between w-100 mb-3">
                <input autoFocus onKeyDown = { handleKeyDown } onInput={handleInputContentTodo} type="text" value={value} className="form-control w-50" />
                <div className="d-flex gap-2">
                    <button onClick={handleClickCancel} type="button" className="btn btn-danger">Annuler</button>
                    <input type="submit" className="btn btn-success form-control" value="Sauvegarder" />
                </div>  
            </form>
    )
}

export default EditTodo;