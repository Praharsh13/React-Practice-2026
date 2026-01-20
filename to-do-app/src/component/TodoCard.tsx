import React from 'react'


import type { TODO } from '../App'

type CardProps={
    todo:TODO,
    onDelete:(id:number)=>void
    onToggle:(id:number)=>void
}
const TodoCard = ({todo,onDelete,onToggle}:CardProps) => {
  return (
    <div className='makeBox'>
        <h1>{todo.notes}</h1>
        <p>{todo.description}</p>
        <h3>{todo.date}</h3>

        <div>
            {todo.isCompleted==false ? "Pending" : "Completed"}
        </div>

       <label>
        <input 
        type='checkbox'
        checked={todo.isCompleted}
        onChange={()=>onToggle(todo.id)}

        />
        Mark as Completed
       </label>


      <button onClick={()=>onDelete(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoCard