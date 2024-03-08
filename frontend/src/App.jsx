import { useState } from 'react'

import './App.css'
import {Addexpense} from './components/Addexpense'
import {Signup} from './components/Signup'
import { Login } from './components/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
      <Login></Login>
      <Addexpense></Addexpense>
      <Signup></Signup>
      
      </div>
    </>
  )
}

export default App
