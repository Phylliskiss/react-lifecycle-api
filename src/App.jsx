import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersClass from './UsersClass'
import UsersFunction from './UsersFunction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UsersClass/> */}
      <UsersFunction/>
    </>
  )
}

export default App
