import { useState } from 'react'
import './App.css'
import { Addexpense } from './components/Addexpense'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { Route, Routes } from 'react-router-dom'
import UserContext from './context/UserContext'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import Navbar from './components/Navbar'
import Header from './components/Dashboard'
import Dashboard from './components/Dashboard'
// import SignIn from  './components/SignIn'
// Importing the correct functions from the user controller
// import { signup } from '../../Backend/controller/user'

function App() {

  const [userOBJ,setUserOBJ] = useState({})
  return (
    <>
    <UserContext.Provider value={{userOBJ,setUserOBJ}}>

     
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/add' element={<Addexpense />} />
        <Route path='/dashboard' element={<Dashboard/>} />

      </Routes>
     
      </UserContext.Provider>
      {/* <SignIn/>  */}
    </>
  )
}

export default App
