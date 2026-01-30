import Header from './components/Header';
import Footer from './components/Footer';

import './assets/styles/App.scss';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useReducer, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Theme from './components/Theme';
import todoReducer from './reducers/todoReducer';

function App() {
  const [theme, setTheme] = useState('green');

  // Gestion du reducer
  const [state, dispatch] = useReducer(todoReducer, 
    {
      todoList: []
    },
  );

  // Méthode pour changer de thème
  const changeTheme = (t) => {
    setTheme(t);
    console.log("theme",theme);
  }

  // Méthode d'ajout de nouveau todo
  const addTodo = (content) => {
    dispatch(
      {
        type: 'ADD_TODO',
        content
      }
    );
  }

  // Méthode de suppression de todo
  const deleteTodo = (id) => {
    dispatch(
      {
      type: 'DELETE_TODO',
      id
    }
    );
  }
  
  // Méthode de changement d'état de todo
  const toggleTodo = (id) => {
    dispatch(
      {
        type: 'TOGGLE_TODO',
        id
      }
    )
  }

  // Méthode de changement d'état du mode d'édition de todo
  const toggleEditTodo = (id) => {
    dispatch(
      {
        type: 'TOGGLE_EDIT_TODO',
        id
      }
    )
    }
  

    
  // Méthode de mise à jour de todo
  const updateTodo = (id, content) => {
    dispatch(
      {
        type: 'TOGGLE_UPDATE_TODO',
        id,
        content
      }
    )
  }


  return (
    <ThemeContext value={theme}>

      <Header />
      <main className='container'>
        <h1>Gestionnaire de tâches</h1>
        <Theme changeTheme={changeTheme} />
          <AddTodo addTodo={ addTodo } />
        <TodoList 
          todoList = { state.todoList } 
          deleteTodo = { deleteTodo } 
          toggleTodo = { toggleTodo }
          toggleEditTodo = { toggleEditTodo}
          updateTodo = { updateTodo }
        />
      </main>
      <Footer />
    </ThemeContext>
  )
}

export default App
