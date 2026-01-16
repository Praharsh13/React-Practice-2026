import { useState } from 'react'

import './App.css'
import SerachPage from './pages/SerachPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SerachPage/>
    </>
  )
}

export default App
