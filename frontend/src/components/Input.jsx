import React from 'react'

function Input({type,set}) {
  return (
    <input
        type={type}
        name={type}
        onChange={(e) => set(e.target.value)}
        placeholder={type}
       
        required
        className=" border border-black px-3 py-2 my-5 text-black "
      />
  )
}

export default Input