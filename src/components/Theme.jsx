import { useContext } from "react";
import { TodoDispatcherContext } from "../context/TodoContext";

export default function Theme(){

    const dispatch = useContext(TodoDispatcherContext);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        console.log(e.target)
        if(e.target.value === 'green'){
           console.log('vert selectionné');
           dispatch({
            type: 'SET_THEME',
            theme: e.target.value
           })
        }else if(e.target.value === 'red'){
            console.log('rouge selectionné');
            dispatch({
                type: 'SET_THEME',
                theme: e.target.value
           })        }
    }

    return (
        <section className="d-flex justify-content-end ">
            <form onSubmit={ handleSubmit } onChange={handleChange} action="#" method="POST" className="d-flex gap-2 flex-column w-25">
                <label htmlFor="theme" className="form-label text-secondary">Thème du bouton Ajouter</label>
                <select name="theme" id="theme" className="form-select">
                    <option value="">--Veuillez choisir un thème--</option>
                    <option value="green">vert</option>
                    <option value="red">rouge</option>
                </select>
                <input type="submit" value="Soumettre" hidden />
            </form>
        </section>
    )
}