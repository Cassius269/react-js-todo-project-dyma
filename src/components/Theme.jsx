export default function Theme({changeTheme}){

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        console.log(e.target)
        if(e.target.value === 'green'){
           console.log('vert selectionné');
           changeTheme(e.target.value);
        }else if(e.target.value === 'red'){
            console.log('orange selectionné');
            changeTheme(e.target.value);
        }
    }

    return (
        <section className="d-flex justify-content-end align-items-end flex-column">
            <h3>Le thème</h3>
            <form onSubmit={ handleSubmit } onChange={handleChange} action="#" method="POST" className="d-flex flex-column">
                <label htmlFor="theme" className="form-label">Thème du bouton Ajouter</label>
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