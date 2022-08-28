import './App.css';
import React , {useState , useEffect} from 'react'
import { GoPlus } from 'react-icons/go'
import { ImCheckboxChecked } from "react-icons/im";
import { CgTrash } from "react-icons/cg";

const App = () => {
  const [selection , setSelection] = useState('All')
  const [todos , setTodos] = useState([])
  const [filteredTodos , setFilteredTodos] = useState([])
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
    setTodos([...todos])
  }

  const handleSelection = (e) =>{
    setSelection(e.target.value)
  }

  useEffect(()=>{
    if(selection === 'All'){
      setFilteredTodos(todos)
    }
    if(selection === 'Completed'){
      setFilteredTodos(todos.filter(t=>(t.completed === true)))
      }
    if(selection === 'Uncompleted'){
      setFilteredTodos(todos.filter(t=>(t.completed === false)))
      }
  },[todos , selection ])

  return (
    <>
    <h1>To Do List</h1>
    <input type="text" value={input} onChange={handleChange} />
    <button onClick={handleClick}><GoPlus/></button>
    <select onChange={handleSelection} value={selection}>
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Uncompleted">Uncompleted</option>
    </select>
    {
      filteredTodos.map(todo =>(
        <div key={todo.input}>
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