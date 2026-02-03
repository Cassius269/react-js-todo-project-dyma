import Header from "./Header";
import Theme from "./Theme";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function TodoFeature(){ 
  return (
    <>
        <Header />
        <main className='container'>
            <h1>Gestionnaire de tâches</h1>
            <Theme />
            <AddTodo />
            <TodoList />
        </main>
        <Footer />
    </>
  )
}