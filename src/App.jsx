import Header from './components/Header';
import Footer from './components/Footer';

import './assets/styles/App.scss';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (content) => {
    const todo = {
      id: crypto.randomUUID(), // généré un ID unique
      content, 
      done: false,
      editable: false
    };

    setTodoList([...todoList, todo]); // Récupérer les todos, et rajouter la tâche récente
  }

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(t => t.id !== id));
  }
  
  return (
    <>
      <Header />
      <main className='container'>
        <h1>Gestionnaire de tâches</h1>
        <AddTodo addTodo={ addTodo } />
        <TodoList todoList = { todoList } deleteTodo = { deleteTodo } />
      </main>
      <Footer />
    </>
  )
}

export default App
