import React, { useState } from 'react'
import type { TODO } from '../App'


export type Props={
    todoList:TODO[],
    settodoList:React.Dispatch<React.SetStateAction<TODO[]>>
}
const AddToDo = ({todoList,settodoList}:Props) => {

    let ids=todoList.length

    let [todoD,setTodoD]=useState("")
    let [todoT,setTodoT]=useState("")

        let addToDo=()=>{
            let newTodo:TODO={
                id:ids+1,
                description:todoD,
                notes:todoT,
                date: new Date().toLocaleDateString("en-GB"),
                isCompleted:false
            }


           settodoList([...todoList,newTodo]) 
           setTodoD("")
           setTodoT("")


            
        }
    

  return (
    <div>



        <label>Title</label>
        <input 
        type="text"
        value={todoT}
        onChange={(e)=>setTodoT(e.target.value)}
        />


        <label>Description</label>
        <textarea
        rows={5}
        value={todoD}
        onChange={(e)=>setTodoD(e.target.value)}
        placeholder='Write your notes here...'
        />

        <button onClick={addToDo}>Add ToDo</button>
    </div>
  )
}

export default AddToDo