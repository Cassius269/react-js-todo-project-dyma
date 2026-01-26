import Header from './components/Header';
import Footer from './components/Footer';

import './assets/styles/App.scss';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState([]);

  // Méthode d'ajout de nouveau todo
  const addTodo = (content) => {
    const todo = {
      id: crypto.randomUUID(), // généré un ID unique
      content, 
      done: false,
      editable: false
    };

    setTodoList([...todoList, todo]); // Récupérer les todos, et rajouter la tâche récente
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
};
    
  return (
    <>
      <Header />
      <main className='container'>
        <h1>Gestionnaire de tâches</h1>
        <AddTodo addTodo={ addTodo } />
        <TodoList 
          todoList = { todoList } 
          deleteTodo = { deleteTodo } 
          toggleTodo = { toggleTodo }
        />
      </main>
      <Footer />
    </>
  )
}

export default App
