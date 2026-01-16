import React from 'react'

const Card = ({user}) => {
    console.log(user)
    let {name, age, city,carModel}=user
  return (
    <div className='SearchCard'>

        <div>
            <h1>{name}</h1>
            <h2>Age : {age}</h2>
            <p>Lives in {city} and owns {carModel}</p>
        </div>

    </div>
  )
}

export default Card