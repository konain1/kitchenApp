import React from 'react'

import { useState } from 'react'

function HistoryBox({history}) {

  const [goods, setGoods] = useState('')
  const [cost, setCost] = useState(0)
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [history, setHistory] = useState([])


    const handleDelete = index => {
        setHistory(prevHistory => prevHistory.filter((item, i) => i !== index))
      }
    
      const handleEdit = index => {
        const editedGoods = prompt('Enter updated goods:', history[index].goods)
        const editedCost = parseFloat(
          prompt('Enter updated cost:', history[index].cost)
        )
        if (editedGoods !== null && !isNaN(editedCost)) {
          const updatedHistory = [...history]
          updatedHistory[index] = {
            ...updatedHistory[index],
            goods: editedGoods,
            cost: editedCost
          }
          setHistory(updatedHistory)
        }
      }
    
  return (
    <div>
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
    </div>
  )
}

export default HistoryBox