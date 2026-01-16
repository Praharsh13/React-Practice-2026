import React from 'react'
import { selectedCity } from '../../utils/data'

const FilterDropDown = ({filterCity,setFilterCity}) => {
  return (

    <>
    <select
    value={filterCity}
    onChange={(e)=>setFilterCity(e.target.value)}
    >
        <option value="">All Cities</option>
        {selectedCity.map(city=>
            <option key={city} value={city}>{city}</option>
        )}
    </select>
    </>
    
  )
}

export default FilterDropDown