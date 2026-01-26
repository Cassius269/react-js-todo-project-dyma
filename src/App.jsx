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
      id: crypto.randomUUID(),
      content, 
      done: false,
      editable: false
    };

    setTodoList([...todoList, todo]); // Récupérer les todos, et rajouter la tâche récente
  }
  return (
    <>
      <Header />
      <main className='container'>
        <h1>Gestionnaire de tâches</h1>
        <AddTodo addTodo={ addTodo } />
        <TodoList />
      </main>
      <Footer />
    </>
  )
}

export default App
