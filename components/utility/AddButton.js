import React from 'react'

export default function AddButton({children}) {
  return (
    <button className='fixed bg-sky-500 rounded-full text-white w-10 h-10 font-bold bottom-14 right-14 hover:bg-red-500'>
        {children}
    </button>
  )
}
