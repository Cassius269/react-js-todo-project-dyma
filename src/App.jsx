import Header from './components/Header';
import Footer from './components/Footer';

import './assets/styles/App.scss';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useEffect, useReducer, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Theme from './components/Theme';
import todoReducer from './reducers/todoReducer';

function App() {
  // Déclaration de l'état du thème
  const [theme, setTheme] = useState('green');

  // Déclaration du reducer 
  const [state, dispatch] = useReducer(todoReducer, {
    todoList: []
    });

  // Déclaration de l'état du chargement des todos
  const [isLoading, setIsLoading] = useState(true);

  // Récupérer les todos
  useEffect( () => { 
    let shouldCancel = false;

    // Créer la fonction de récupération des todos
    const getTodos = async ()=> {
      try {
        setIsLoading(true)
        const response = await fetch('https://www.restapi.fr/api/todos');
          if(response.ok){
            const data = await response.json();
            console.log("Todo(s) récupéré(s) depuis l'API : ",data);

            if(!shouldCancel){
                fetchTodos(data);
            }else {
              console.log('erreur');
            }
            }
          } catch (error) {
            console.log('erreur', error);
          }finally {
            setIsLoading(false);
          }
  };

    getTodos(); // appel de la fonction de récupération de todos

    // Ignorer les nouvelles récupérations de todo si recupération déjà effectuée
    return () => {
      shouldCancel = true;
    }
  }, []) // charger la liste des todos une seule fois après le premier rendu du composant <App />

  // Méthode pour récuperer les todos et les mettre dans l'état local du composant racine
  const fetchTodos = (todos) =>{
    dispatch({
      type: 'TODO_FETCH',
      todos: todos
    })
  };
    // Méthode d'ajout de nouveau todo
  const addTodo = (newTodo) => {
    dispatch({
      type: 'TODO_CREATE',
      todo: newTodo
    })
  }

  // Méthode de suppression de todo
  const deleteTodo = (_id) => {
    dispatch({
      type: 'TODO_DELETE',
      _id
    })
  }
    
  // Méthode de mise à jour de todo
  const updateTodo =(updatedTodo) => {
    dispatch({
      type: 'TODO_UPDATE',
      todo: updatedTodo
    })
  }

  // Méthode pour changer de thème
  const changeTheme = (t) => {
    setTheme(t);
    console.log("theme",theme);
  }
console.log('état local', state.todoList)
  return (
    <ThemeContext value={theme}>

      <Header />
      <main className='container'>
        <h1>Gestionnaire de tâches</h1>
        <Theme changeTheme={changeTheme} />
        <AddTodo addTodo={ addTodo } />
        {isLoading && <p>Chargement des todos en cours</p>}
        <TodoList 
          todoList = { state.todoList } 
          deleteTodo = { deleteTodo } 
          updateTodo = { updateTodo }
          addTodo = { addTodo }
        />
      </main>
      <Footer />
    </ThemeContext>
  )
}

export default App
