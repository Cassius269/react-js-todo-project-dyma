import Header from './components/Header';
import Footer from './components/Footer';

import './assets/styles/App.scss';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useReducer, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Theme from './components/Theme';
import todoReducer from './reducers/todoReducer';
import { TodoStateContext, TodoDispatcherContext } from './context/TodoContext'; // récupeer le contexte de l'état des todos et du dispatcher
function App() {
  // Gestion de l'état du thème du bouton ajouter de todo
  const [theme, setTheme] = useState('green');

  // Gestion du reducer de todo
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
    
  return (
    <TodoStateContext value= {state}>
      <TodoDispatcherContext value={dispatch}>
        <ThemeContext value={theme}>
          <Header />
          <main className='container'>
            <h1>Gestionnaire de tâches</h1>
            <Theme changeTheme={changeTheme} />
              <AddTodo />
            <TodoList />
          </main>
          <Footer />
        </ThemeContext>
      </TodoDispatcherContext>
    </TodoStateContext>
  )
}

export default App
