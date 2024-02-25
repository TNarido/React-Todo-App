import React, {useState} from 'react'
import './TodoForm.css'

const TodoForm = ({addTodo}) => {
  const [name, setName] = useState('')

  const handleClick = () => {
    addTodo(name)
    setName('')
  }

  return (
    <div className = 'todo-form'>
        <input type="text" value = {name} onChange = {(e) => setName(e.target.value)}/>
        <button className='button2' onClick = {handleClick}>Add</button>
    </div>
  )
}

export default TodoForm
