import React from 'react'

export default function AddButton({children}) {
  return (
    <button className='fixed bg-sky-500 rounded-full text-white w-10 h-10 font-medium bottom-10 right-10 hover:bg-red-500'>
        {children}
    </button>
  )
}