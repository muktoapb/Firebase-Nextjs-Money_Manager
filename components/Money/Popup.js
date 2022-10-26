import React from 'react'

export default function Popup({ status, setStatus, children, title }) {
    return (
        <>
            {status&& (
                <div className='w-full fixed md:max-w-lg max-w-sm bg-white px-5 py-5 rounded-md shadow-lg mx-auto left-0 right-0 z-50'>
                    <h4 className="text-md font-semibold mb-2">{title}</h4>
                    <div className="">
                        {children}
                    </div>
                    <button className="absolute text-white bg-sky-500 w-6 h-6 text-center font-bold top-0 right-0 rounded-tr-md cursor-pointer text-xs leading-6 hover:rounded-full hover:bg-red-500" onClick={() => setStatus(false)}>
                            x
                        </button>
                </div>
            )
        }
        </>
    )
}
