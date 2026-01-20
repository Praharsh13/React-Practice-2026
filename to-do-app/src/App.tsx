import { useEffect, useMemo, useState } from "react"
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

let [todoList,settodoList]=useState<TODO[]>(()=>{
  let storedTodo:string|null=localStorage.getItem("todos")
   return storedTodo ? JSON.parse(storedTodo) : []
})
//useeffect to set the todo list

//Implementing the pagination TodoList
const pageSize:number=4
const [currentPage, setCurrentPage]=useState(1)
const totalPage=Math.ceil(todoList.length/pageSize)



useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todoList))
},[todoList])
console.log(todoList)

const smallList=useMemo(()=>{

  let startPage=(currentPage-1)*pageSize
  let endPage=startPage+pageSize

  return todoList.slice(startPage,endPage)


},[currentPage,todoList])

useEffect(() => {
  if (currentPage > totalPage && totalPage > 0) {
    setCurrentPage(totalPage)
  }
  if (todoList.length === 0) {
    setCurrentPage(1)
  }
}, [todoList.length, totalPage, currentPage])

  return (
    <div>
      <AddToDo todoList={todoList} settodoList={settodoList}/>
      <div>
        <ShowToDo todoList={smallList} settodoList={settodoList}/>
      </div>

      <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>

        <button
        disabled={currentPage==1}
        onClick={()=>setCurrentPage((prev)=>prev-1)}
        >Prev</button>


        <span>Page {currentPage} of {totalPage || 1}</span>

        <button
        disabled={currentPage==totalPage || totalPage===0}
        onClick={()=>setCurrentPage((prev)=>prev+1)}
        >Next</button>
      </div>
    </div>
  )
}

export default App