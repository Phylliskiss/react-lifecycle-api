import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersClass from './UsersClass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsersClass/>
    </>
  )
}

export default App
