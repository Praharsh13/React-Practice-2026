import React from 'react'
import Card from './Card'

const ShowUser = ({users}) => {
  return (
    <>
    {
        users.map((user,index)=>(
            <Card key={user.name} user={user}/>
        ))
    }
    </>
  )
}

export default ShowUser