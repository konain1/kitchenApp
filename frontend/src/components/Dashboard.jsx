import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdGroupAdd } from "react-icons/md";

import Navbar from './Navbar'
import UserContext from '../context/UserContext'
import Sidebar from './Sidebar'
import Overlay from './Overlay'
import Profile from './Profile'
import MembersCard from './DashboardUtilities/MembersCard';

function Dashboard () {
  const [goods, setGoods] = useState('')
  const [cost, setCost] = useState(0)
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [history, setHistory] = useState([])

  const userDetailsContext = useContext(UserContext)

  const handleSubmit = () => {
    const newItem = {
      goods: goods,
      cost: parseFloat(cost), // Convert cost to float
      timestamp: new Date().toLocaleString()
    }
    setHistory(prevHistory => [...prevHistory, newItem])
    setGoods('')
    setCost(0)
    setSubmitDisabled(true) // Disable submit button
    setTimeout(() => {
      setSubmitDisabled(false) // Enable submit button after 3 seconds
    }, 3000)
  }


  // nothing
 
  const totalCost = history.reduce((total, item) => total + item.cost, 0)

  return (
    <>
      <Navbar profile={userDetailsContext.userOBJ} />
      <header className='bg-gray-800 text-white h-screen'>
        <div className='max-w-7xl mx-auto px-4 flex justify-between items-stretch h-full py-4'>
          {/* Sidebar */}
          {/* <nav className='bg-gray-900 flex items-start p-4 rounded-lg md:w-[20%]'>
            <ul className='flex flex-col space-y-4 w-full'>
              <li>
                <Link
                  to='/history'
                  className='text-white hover:text-green-500 flex items-center'
                >
                  <span className='hidden md:inline px-2'>History</span>
                  <MdOutlineSettings className=' inline' />
                </Link>
              </li>
              <li>
                <Link
                  to='/payments'
                  className='text-white hover:text-green-500 flex items-center'
                >
                  <span className='hidden md:inline px-2'>Members</span>
                  <FaUsers className=' inline' />
                </Link>
              </li>
              <li>
                <Link
                  to='/groceries'
                  className='text-white hover:text-green-500 flex items-center'
                >
                  <span className='hidden md:inline px-2'>Groceries</span>
                  <MdOutlineLocalGroceryStore className='inline' />
                </Link>
              </li>
              <li>
                <Link
                  to='/settings'
                  className='text-white hover:text-green-500 flex items-center absolute bottom-0'
                >
                  <span className='hidden md:inline px- '>Settings</span>
                  <MdOutlineSettings className='' />
                </Link>
              </li>
            </ul>
          </nav> */}

          <Sidebar />
          {/* <Overlay/> */}

          {/* Right Side - Content Area */}
          <div className='bg-gray-700 p-4 rounded-lg flex flex-col justify-between h-full w-60% overflow-hidden'>
            <div>
              <p className='text-lg font-semibold'>
                Welcome, {userDetailsContext.userOBJ.username}
              </p>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                aliquam lorem ut nibh dignissim, nec rutrum nulla facilisis.
                Donec vel velit justo.
              </p>
            </div>
            <div >

            {/* <div className='border border-white h-full w-[70%]'>members</div> */}

            <MembersCard  />
            {/* <div className='border mx-10 border-white rounded-full h-10 w-10 flex justify-center items-center cursor-pointer self-center transform hover:scale-110 transition-transform active:scale-95'>
            <MdGroupAdd />
             </div> */}

             
            </div>
            {/* Goods cost and goods names input sections */}
            <div className='flex flex-col gap-2'>
              <input
                type='text'
                placeholder='Goods Names'
                value={goods}
                onChange={e => setGoods(e.target.value)}
                className='py-2 px-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:bg-gray-900'
              />
              <input
                type='number'
                placeholder='Goods Cost'
                value={cost}
                onChange={e => setCost(e.target.value)}
                className='py-2 px-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:bg-gray-900'
              />
              <button
                onClick={handleSubmit}
                className={`bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg ${
                  submitDisabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={submitDisabled} // Disable button when submit button is clicked
              >
                Submit
              </button>
            </div>
            {/* History Box */}
            <div className='mt-4 p-4 bg-gray-800 rounded-lg overflow-y-auto'>
              <h3 className='text-lg font-semibold mb-2'>History</h3>
              <ul className='text-sm'>
                {history.map((item, index) => (
                  <li key={index} className='flex justify-between items-center'>
                    <div>
                      {item.timestamp}: {item.goods} - ${item.cost}
                    </div>
                    <div>
                      <button
                        onClick={() => handleEdit(index)}
                        className='bg-yellow-500  hover:bg-yellow-600  flex justify-center text-white px-2 py-1 rounded-md mr-2'
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className='bg-red-500 hover:bg-red-600  text-white px-2 py-1 rounded-md' >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* <History history={history} /> */}
            {/* Total Cost */}
            <div className='mt-4 p-4 bg-gray-800 rounded-lg'>
              <h3 className='text-lg font-semibold mb-2'>Total Cost</h3>
              <p className='text-sm'>${totalCost.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Dashboard
