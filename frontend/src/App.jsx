import { useState } from 'react'
import './App.css'
import { Addexpense } from './components/Addexpense'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { Route, Routes } from 'react-router-dom'

// Importing the correct functions from the user controller
// import { signup } from '../../Backend/controller/user'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/add' element={<Addexpense />} />
      </Routes>
      <div className='app'>
        Remove the Login component here if you want to render it inside the route */
        <Login></Login> 
      </div>
    </>
  )
}

export default App
