import React from 'react'

const InputBox = ({searchTerm,setSearchTerm}) => {
    // let {searchTerm}= searchTerm
    // let {setSearchTerm}=setSearchTerm
  return (
    <>
    <input type="text"
    id="name"
    placeholder='Search name'
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}
    
    />

    </>
  )
}

export default InputBox