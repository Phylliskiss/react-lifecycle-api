/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import NavigationBar from './components/NavigationBar'
import UsersClass from './components/UsersClass'
import UsersFunction from './components/UsersFunction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UsersClass/> */}
      <NavigationBar/>
      <UsersFunction/>
    </>
  )
}

export default App


// https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=evUQHLLMG2DdnAk5rQHsMCViqxR4nf1s
