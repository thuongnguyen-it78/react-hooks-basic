import { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const todoList = [
  { id: 1, title: 'I love Easy Frontend! 😍 ' },
  { id: 2, title: 'We love Easy Frontend! 🥰 ' },
  { id: 3, title: 'They love Easy Frontend! 🚀 ' },
]


// Ctrl + Shirt + O: sẽ tự động tìm những thằng không sử dụng và bỏ đi
function App() {
  const [todos, setTodos] = useState(todoList)
  const [posts, setPosts] = useState([])

  // look like componentDidMount
  useEffect(() => {
    async function fetchPostList() {
      const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
      const response = await fetch(requestUrl)
      const responseJSON = await response.json()
      console.log(responseJSON);
  
      setPosts(responseJSON.data)
    }
    fetchPostList()
    }, [])
  // look like componentDidUpdate and componendDidMount
  useEffect(() => {
    console.log("aye")
  })
  
  function handleTodoClick(todo) {
    const index = todos.indexOf(todo)
    if(index == -1) return
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  function handleFormSubmit(value) {
    const newTodos = [...todos]
    const todo = {
      ...value, 
      id: newTodos.length + 2
    }
    newTodos.push(todo)

    setTodos(newTodos)
  }






  return (
    <div className="app">
      {/* <TodoForm onSubmit = {handleFormSubmit}/> */}
      {/* <TodoList 
        todos = {todos} 
        onTodoClick = {handleTodoClick}
      /> */}
      <PostList posts = {posts}/>
    </div>
    
  );
}

export default App;
