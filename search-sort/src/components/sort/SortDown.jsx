import React from 'react'

const SortDown = ({sortvalue,setSortvalue}) => {
  return (
    <select 
    value={sortvalue}
    onChange={(e)=>setSortvalue(e.target.value)}
    >
        <option value="byAsc">Asending</option>
        <option value="byDsc">Desending</option>
        <option value="">Random</option>
    </select>
  )
}

export default SortDown