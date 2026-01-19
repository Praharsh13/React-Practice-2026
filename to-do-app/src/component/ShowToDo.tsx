import React from 'react'
import type { Props } from './AddToDo'
import type { TODO } from '../App'
import TodoCard from './TodoCard'

const ShowToDo = ({todoList,settodoList}:Props) => {

    let handleDelete=(id:number)=>{

        let listAfterDelete:TODO[]=todoList.filter((d:TODO)=>d.id!==id)
        settodoList(listAfterDelete)

    }

    let handleToggle=(id:number)=>{ 
        settodoList((prev)=>prev.map((todo)=>(
            todo.id===id ? {...todo, isCompleted:!todo.isCompleted}:
            todo
        )))
    }
       
    
  return (
    <div className='makeBox'>
        {todoList.map((todo:TODO)=>(
            <TodoCard 
           
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onToggle={handleToggle}
/>

            
           
        ))}
    </div>
  )
}

export default ShowToDo