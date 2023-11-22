import logo from './logo.svg';
import './App.css';
import Header from './compontens/Header';
import TodoList from './compontens/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <Header/>
     <TodoList/>
    </div>
  );
}

export default App;
