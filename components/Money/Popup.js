import React from 'react'

export default function Popup({ status, setStatus, children }) {
    return (
        <>
            {status&& (
                <div className='w-full fixed md:max-w-lg max-w-sm bg-white px-5 py-5 rounded-md shadow-lg mx-auto left-0 right-0'>
                    <div className="relative">
                        <button className="absolute text-white bg-sky-500 w-7 h-7 text-center font-bold top-0 right-0 rounded-md cursor-pointer text-xs leading-7 hover:rounded-full hover:bg-red-500" onClick={() => setStatus(false)}>
                            x
                        </button>
                        {children}
                    </div>
                </div>
            )
        }
        </>
    )
}
