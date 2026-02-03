import './assets/styles/App.scss';
import TodoProvider from './components/TodoProvider';
import TodoFeature from './components/TodoFeature';
function App() {
  return (
    <TodoProvider>
      <TodoFeature />
    </TodoProvider>
  )
}

export default App
