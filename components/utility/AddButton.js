import React from 'react'

export default function AddButton({children}) {
  return (
    <button className='fixed bg-sky-500 rounded-full text-white w-10 h-10 font-bold bottom-8 right-8 hover:bg-red-500 shadow-md shadow-sky-800'>
        {children}
    </button>
  )
}
