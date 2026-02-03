import { useContext, useState } from 'react';
import styles from '../assets/styles/layouts/AddTodoForm.module.scss';
import { TodoDispatcherContext, TodoStateContext } from '../context/TodoContext';


export default function AddTodo() {
    const dispatch = useContext(TodoDispatcherContext); // Récupérer le dispatcher
    const state = useContext(TodoStateContext);

    console.log("theme dans add", state.theme);

    const [value, setValue] =useState('');

    // console.log(addTodo)
    const handleSubmit = (e) => {
        e.preventDefault(); // Désactiver le comportement par défaut de rechargement de page 
        console.log(e.target);
        if(value.length > 0 && value.trim() !== ''){
            dispatch({
                type : 'ADD_TODO',
                content: value.trim()

            }); // ajouter la todo à la liste des todo en renseignant sa valeur au dispatch ainsi que l'action de l'utilsateur
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
            <h2 className={`my-4 text-center py-3`}>Créer une nouvelle tâche</h2>
            <form onSubmit={handleSubmit} action="#" method="POST" className={`d-flex justify-content-around flex-wrap flex-md-nowrap justify-content-md-between bg-primary-subtle p-5 rounded-2 m-auto  ${styles.todoForm}`} >
                    <input onInput={handleInput} 
                            className="form-control mb-3 p-2" 
                            type="text" name="task" id="task" 
                            value={value}
                            placeholder='Ajouter une nouvelle tâche' 
                    />
                    <button 
                        className={`btn  text-white form-control ${(state?.theme ?? 'green') === 'red' ? 'bg-danger' : 'btn-primary'}`}
                        type="submit">
                            Ajouter une nouvelle tâche
                    </button>
            </form>
        </>
    );
}