import { BiCalendarEvent, BiDonateHeart } from 'react-icons/bi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { MdPayment } from 'react-icons/md';
import { numberFormater } from '../../utils/numberFormater';

export default function ItemRow({date, expense,donate,invest}) {


  return (
    <div className="flex justify-between mb-2 flex-wrap border-b-2 border-dotted last:border-b-0 pb-2">
         <div className="flex items-center w-1/2 md:w-1/4"><BiCalendarEvent/> <span className='ml-2'>{date}</span></div>
        <div className="flex items-center w-1/2 md:w-1/4"><MdPayment/> <span className='ml-2 tracking-wider'>{numberFormater(expense)}</span></div>
        <div className="flex items-center w-1/2 md:w-1/4"><BiDonateHeart/> <span className='ml-2 tracking-wider'>{numberFormater(donate)}</span></div>
        <div className="flex items-center w-1/2 md:w-1/4"><IoBriefcaseOutline/> <span className='ml-2 tracking-wider'>{numberFormater(invest)}</span></div>
    </div>
  )
}
