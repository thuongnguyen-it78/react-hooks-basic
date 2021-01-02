import { useEffect, useState } from 'react';
import queryString from 'query-string'

import './App.scss';
import ColorBox from './components/ColorBox';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PostFiltersForm from './components/PostFiltersForm';


const todoList = [
  { id: 1, title: 'I love Easy Frontend! 😍 ' },
  { id: 2, title: 'We love Easy Frontend! 🥰 ' },
  { id: 3, title: 'They love Easy Frontend! 🚀 ' },
]


// Ctrl + Shirt + O: sẽ tự động tìm những thằng không sử dụng và bỏ đi
function App() {
  const [todos, setTodos] = useState(todoList)
  const [posts, setPosts] = useState([])
  const [pagination, setPagination] = useState({})
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: ''
  })



  // look like componentDidMount if []
  useEffect(() => {
    async function fetchPostList() {

      try {
        // _limit=10&_page=1
        const paramsString = queryString.stringify(filters)

        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl)
        const responseJSON = await response.json()
        console.log(responseJSON);
        const { data, pagination } = responseJSON
        setPosts(data)
        setPagination(pagination)   
        


      } catch (error) {
        console.log("Fail", error);
      }

    }
    fetchPostList()
    console.log("aye1");
    }, [filters])
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

  function hanlePageChange(newPage) {
    setFilters({...filters, _page: newPage})
  }

  function handleFilterChange(values) {
    console.log(values);
    setFilters(
      {
        ...filters,
        _page: 1,
        title_like: values.q
      }
      )

  }


  return (
    <div className="app">
      {/* <TodoForm onSubmit = {handleFormSubmit}/> */}
      {/* <TodoList 
        todos = {todos} 
        onTodoClick = {handleTodoClick}
      /> */}
      <PostFiltersForm onSubmit = {handleFilterChange}/>
      <PostList posts = {posts}/>
      <Pagination pagination = {pagination} onPageChange ={hanlePageChange}/>
    </div>
    
  );
}

export default App;
