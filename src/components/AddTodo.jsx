import { useState } from 'react';
import styles from '../assets/styles/layouts/AddTodoForm.module.scss';


export default function AddTodo({addTodo}) {
    const [value, setValue] =useState('');

    // console.log(addTodo)
    const handleSubmit = (e) => {
        e.preventDefault(); // Désactiver le comportement par défaut de rechargement de page 
        console.log(e.target);
        if(value.length > 0 && value.trim() !== ''){
            addTodo(value.trim());
            setValue('');
        }
    }

    const handleInput = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);
        console.log("valeur de la state value", inputValue);
    }

    return (
        <>
            <h2 className={`my-4 text-center bg-primary-subtle py-3`}>Créer une nouvelle tâche</h2>
            <form onSubmit={handleSubmit} action="#" method="POST" className={`d-flex justify-content-around flex-wrap flex-md-nowrap justify-content-md-between bg-primary-subtle p-5 rounded-2 m-auto  ${styles.todoForm}`} >
                    <input onInput={handleInput} 
                            className="form-control mb-3 p-2" 
                            type="text" name="task" id="task" 
                            value={value}
                            placeholder='Ajouter une nouvelle tâche' 
                    />
                    <button 
                        className="btn btn-secondary text-white form-control" 
                        type="submit">
                            Ajouter une nouvelle tâche
                    </button>
            </form>
        </>
    );
}