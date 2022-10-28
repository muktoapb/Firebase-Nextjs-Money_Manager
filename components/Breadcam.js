import Link from 'next/link'
import React from 'react'
import { BiDonateHeart } from 'react-icons/bi'
import { IoBriefcaseOutline } from 'react-icons/io5'
import { MdPayment } from 'react-icons/md'

export default function Breadcam({title}) {


  
  return (
    <div className="flex justify-between items-center mb-8 relative z-1 mt-24">
        <h3 className='text-2xl font-bold'>{title}</h3>
        <div className="flex gap-4 text-3xl">
          <Link href='/expense'>
            <a className="relative">
              <MdPayment  className="-mb-5"/>
              <span className='text-xs bg-red-500 text-white px-2 py-1 rounded-md'>206,600</span>
            </a>
          </Link>
          <Link href='/donate'>
            <a className="relative">
              <BiDonateHeart  className="-mb-5"/>
              <span className='text-xs bg-red-500 text-white px-2 py-1 rounded-md'>2000</span>
            </a>
          </Link>
          <Link href='/investment'>
            <a className="relative">
              <IoBriefcaseOutline  className="-mb-5"/>
              <span className='text-xs bg-red-500 text-white px-2 py-1 rounded-md'>2000</span>
            </a>
          </Link>

        </div>
      </div>
  )
}
