import { useState } from "react";

function EditTodo({ todo, updateTodo }) {
    const [value, setValue] = useState(todo.content);
    const [isLoading, setIsLoading] = useState(false);

    const updateTodoFromApi = async (todoToUpdate) => {
        const  {_id, editable, ...payload } = todoToUpdate;
        try {
            setIsLoading(true); // activer le loading pendant la mise à jour
            const response = await fetch(`https://www.restapi.fr/api/todos/${todoToUpdate._id}`, {
                method: 'PATCH', // modification partielle de la ressource
                body: JSON.stringify(payload),
                headers : {
                    'Content-Type': 'application/json'
                }
                });

            if(response.ok){ // traitement après réussite de l'opération de mise à jour de todo
                const data = await response.json();
                console.log(data);
                updateTodo({...todo, content: value, editable: false});           
            }else {
                console.log('Erreur');
            }
            } catch (error) {
                console.log('Erreur', error)
            }finally {
                setIsLoading(false); //désactiver le loading à la fin de l'opération
            }
        };

    const handleSubmit = (e) => {
        e.preventDefault(); // désactiver le comportement par défaut
        
        if(value.length) {
            updateTodoFromApi({...todo, content: value, editable: false});
        }
    }

    const handleInputContentTodo = (e) => {
        const valueInput = e.target.value;
        setValue(valueInput);
        console.log(value);
    }

    // Passer en mode lecture
    const handleClickCancel = () => {
        updateTodoFromApi({...todo, editable : !todo.editable});
    }

    const handleKeyDown = (e) => {
        console.log(e.key);
        if(e.key === 'Escape') {
            updateTodoFromApi({...todo, editable : !todo.editable });
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} action="#" method="POST" className="d-flex justify-content-between w-50">
                <input onKeyDown = { handleKeyDown } onInput={handleInputContentTodo} type="text" value={value} className="form-control w-50" />
                <div className="d-flex gap-2">
                    <button onClick={handleClickCancel} type="button" className="btn btn-danger">Annuler</button>
                    <input type="submit" className="btn btn-success form-control" value="Sauvegarder" />
                </div>  
            </form>
            { isLoading && <p className="text-warning">Mise à jour de la todo en cours</p>}
        </>
    )
}

export default EditTodo;