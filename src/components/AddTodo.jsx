import { useContext, useState } from 'react';
import styles from '../assets/styles/layouts/AddTodoForm.module.scss';
import { ThemeContext } from '../context/ThemeContext';


export default function AddTodo({addTodo}) {
    const theme = useContext(ThemeContext); // récuperer le contexte du thème
    console.log("theme dans l'app", theme);

    // Déclaration d'un état local pour la valeur de l'input
    const [value, setValue] =useState('');

    // console.log(addTodo)
    const  handleSubmit = async (e) => {
        e.preventDefault(); // Désactiver le comportement par défaut de rechargement de page 
        console.log(e.target);
        if(value.length > 0 && value.trim() !== ''){
            // Préparer la chargeur utile
            const payload = {
                content : value.trim(),
                done: false
            };

            // Envoyer la todo au serveur
            try{
                const response = await fetch('https://www.restapi.fr/api/rtodo',{
                    method: 'POST', 
                    body : JSON.stringify(payload), // transformer la charge utile en json stringifié
                    headers: { 
                        "Content-Type": "application/json"
                    }
                });

                // Traiter la réponse si aucune erreur détectée
                if(response.ok){
                    const data = await response.json();
                    console.log(`Todo créé : ${data}`);
                    addTodo(data); // mettre à jour la liste locale
                    setValue('');                    
                }
   

            }catch(error){
                console.error(`error : ${error}`)
            }
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
                        className={`btn  text-white form-control ${theme ==='green' ? "btn-secondary" : "bg-danger"}`}
                        type="submit">
                            Ajouter une nouvelle tâche
                    </button>
            </form>
        </>
    );
}