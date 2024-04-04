import { useState } from 'react'
import './App.css'
import { Addexpense } from './components/Addexpense'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { Route, Routes } from 'react-router-dom'
import UserContext from './context/UserContext'
// import SignIn from  './components/SignIn'
// Importing the correct functions from the user controller
// import { signup } from '../../Backend/controller/user'

function App() {

  const [userOBJ,setUserOBJ] = useState({})
  return (
    <>
    <UserContext.Provider value={{userOBJ,setUserOBJ}}>

    
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/add' element={<Addexpense />} />

      </Routes>
      <div className='app'>
        <Login></Login> 
      </div>
      </UserContext.Provider>
      {/* <SignIn/>  */}
    </>
  )
}

export default App
