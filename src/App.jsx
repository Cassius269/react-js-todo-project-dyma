import Header from './components/Header';
import Footer from './components/Footer';

import './assets/styles/App.scss';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Theme from './components/Theme';



function App() {
  // Déclaration de l'état du thème
  const [theme, setTheme] = useState('green');

  // Déclaration de l'état des todos
  const [todoList, setTodoList] = useState([]); //  valeur initial tableau vide

  // Méthode d'ajout de nouveau todo
  const addTodo = (content) => {
    const todo = {
      id: crypto.randomUUID(), // généré un ID unique
      content, 
      done: false,
      editable: false
    };

    setTodoList([...todoList, todo]); // Récupérer les anciens todos, et rajouter la tâche récente
  }

  // Méthode de suppression de todo
  const deleteTodo = (id) => {
    setTodoList(todoList.filter(t => t.id !== id));
  }
  
  // Méthode de changement d'état de todo
  const toggleTodo = (id) => {
     const newTodoList = todoList.map( todo => {
      
      if(todo.id === id){   
        return {...todo, done: !todo.done};
      }else {
        return todo;
      }  
    }
  )
    setTodoList(newTodoList);
  }

  // Méthode de changement d'état du mode d'édition de todo
  const toggleEditTodo = (id) => {
     const newTodoList = todoList.map( todo => {
      if(todo.id === id){   
        return {...todo, editable: !todo.editable};
      }else {
        return todo;
      }  
    }
  )
    setTodoList(newTodoList);
};
    
  // Méthode de mise à jour de todo
  const updateTodo = (id, content) => {
    setTodoList(todoList.map(todo => todo.id === id 
                  ? 
                  (
                    {
                      ...todo, 
                      editable : false, // à chaque mise à jour de todo, basculer en mode lecture de todo
                      content: content 
                    }
                  ) 
                  : 
                  todo
                )
              );
  }

  // Méthode pour changer de thème
  const changeTheme = (t) => {
    setTheme(t);
    console.log("theme",theme);
  }

  return (
    <ThemeContext value={theme}>

      <Header />
      <main className='container'>
        <h1>Gestionnaire de tâches</h1>
        <Theme changeTheme={changeTheme} />
          <AddTodo addTodo={ addTodo } />
        <TodoList 
          todoList = { todoList } 
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
