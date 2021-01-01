import { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoList from './components/TodoList';

const todoList = [
  { id: 1, title: 'I love Easy Frontend! 😍 ' },
  { id: 2, title: 'We love Easy Frontend! 🥰 ' },
  { id: 3, title: 'They love Easy Frontend! 🚀 ' },
]


// Ctrl + Shirt + O: sẽ tự động tìm những thằng không sử dụng và bỏ đi
function App() {
  const [todos, setTodos] = useState(todoList)
  
  function handleTodoClick(todo) {
    const index = todos.indexOf(todo)
    if(index == -1) return
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }
  return (
    <div className="app">
      <TodoList todos = {todos} onTodoClick = {handleTodoClick}/>
    </div>
    
  );
}

export default App;
