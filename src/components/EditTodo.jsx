import { useState } from "react";

function EditTodo({ todo, updateTodo, toggleEditTodo }) {
    const [value, setValue] = useState(todo.content);

    const handleSubmit = (e) => {
        e.preventDefault(); // désactiver le comportement par défaut
        if(value.length) {
            updateTodo(todo.id, value);
        }
    }

    const handleInput = (e) => {
        const valueInput = e.target.value;
        setValue(valueInput.trim());
        console.log(value);
    }

    const handleClickCancel = () => {
        toggleEditTodo(todo.id);
    }

    return (
        <form onSubmit={handleSubmit} action="#" method="POST" className="d-flex justify-content-between w-50">
            <input onInput={handleInput} type="text" value={value} className="form-control w-50" />
            <div className="d-flex gap-2">
                <button onClick={handleClickCancel} type="button" className="btn btn-danger">Annuler</button>
                <input type="submit" className="btn btn-success form-control" value="Sauvegarder" />
            </div>  
        </form>
    )
}

export default EditTodo;