import { useState } from "react"
import AddToDo from "./component/AddToDo"
import ShowToDo from "./component/ShowToDo"

export type TODO={
  id:number,
  description:string,
  notes:string,
  date:string,
  isCompleted:boolean,
 }

const App = () => {


  
//let todoList:TODO[]=[]

let [todoList,settodoList]=useState<TODO[]>([])

console.log(todoList)

  return (
    <div>
      <AddToDo todoList={todoList} settodoList={settodoList}/>
      <div>
        <ShowToDo todoList={todoList} settodoList={settodoList}/>
      </div>
    </div>
  )
}

export default App