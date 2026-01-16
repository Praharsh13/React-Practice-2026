import React, { useState,useEffect } from 'react'
import InputBox from '../components/SearchPage/inputBox'
import ShowUser from '../components/SearchPage/ShowUser'
import { users } from '../utils/data'
import FilterDropDown from '../components/filter/FilterDropDown'
import SortDown from '../components/sort/SortDown'

const SerachPage = () => {
    let Users=users
    let [object,setObject]=useState(Users)
    let [searchTerm, setSearchTerm]=useState("")
    let [filterCity,setFilterCity]=useState("")
    let [sortvalue,setSortvalue]=useState("")
    console.log(searchTerm)


    let searchByNameorCarModel=()=>{
      let result=Users
      if(searchTerm){
      result=Users.filter((user)=>(
        user
        .name
       .trim()
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase()) ||
        user
        .carModel
       .trim()
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase()) 
      ))}

      if(filterCity){
        
             result=result.filter((user)=>user.city===filterCity)
      }

      if(sortvalue){
        if(sortvalue=="byAsc"){
          result=[...result].sort((a,b)=>(a.age-b.age))
        }
        else{
          result=[...result].sort((a,b)=>(b.age-a.age))
        }
      }

      setObject(result)
    
  }


    useEffect(()=>{
     let debounceHandler=
     setTimeout(searchByNameorCarModel,
     300)

     return ()=>{
      clearTimeout(debounceHandler)
     }
      



    },[searchTerm,filterCity,sortvalue])

    // // useEffect(()=>{
    // //   if(filterCity){
    // //     let filteredUser=object.filter((user)=>user.city===filterCity)
    // //     setObject(filteredUser)
    // //   }

      
    // },[filterCity,searchTerm])






  return (
   <>
<div>
   <InputBox 
   searchTerm={searchTerm} 
   setSearchTerm={setSearchTerm}


   />

   <FilterDropDown 
   filterCity={filterCity}
   setFilterCity={setFilterCity}
   />

   <SortDown
   sortvalue={sortvalue}
   setSortvalue={setSortvalue}
   />
</div>


   <ShowUser users={object}/>


   </>
  )
}

export default SerachPage