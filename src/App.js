import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TodoInput from './components/ToDoInput';
import TodoList from './components/ToDoList';

function App() {
  return (
    <div className="App m-5">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;