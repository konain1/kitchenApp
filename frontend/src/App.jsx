import { useState } from 'react'

import './App.css'
import {Login} from './components/Login'
import {Signup} from './components/Signup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
      {/* <Login></Login> */}
      <Signup></Signup>
      </div>
    </>
  )
}

export default App
