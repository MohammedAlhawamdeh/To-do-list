import './App.css';
import React , {useState} from 'react'
import { GoPlus } from 'react-icons/go'
import { ImCheckboxChecked } from "react-icons/im";
import { CgTrash } from "react-icons/cg";

const App = () => {
  const [todos , setTodos] = useState([])
  const [input , setInput] = useState('')
  const handleChange = (e) =>{
    setInput(e.target.value)
  }
  const handleClick = (e) =>{
    e.preventDefault()
    setTodos([...todos , {input , completed : false}])
  }
  const handleDelete = (e,pickedTodo) =>{
    e.preventDefault()
    let filteredTodos = todos.filter(t=>(pickedTodo !== t.input))
    setTodos(filteredTodos)
  }
  const handleCompleted = (e,pickedTodo) =>{
    e.preventDefault()
    pickedTodo.completed = !pickedTodo.completed
    setTodos([ ...todos])
  }
  
  return (
    <>
    <h1>To Do List</h1>
    <input type="text" value={input} onChange={handleChange} />
    <button onClick={handleClick}><GoPlus/></button>
    {
      todos.map(todo =>(
        <div>
        <span className={(todo.completed)?'btn-line':'btn'}>{todo.input}</span>
        <button onClick={(e)=>handleCompleted(e,todo)}><ImCheckboxChecked/></button>
        <button onClick={(e)=>handleDelete(e,todo.input)}><CgTrash/></button>
        </div>
      ))
    }
    </>
  )
}

export default App