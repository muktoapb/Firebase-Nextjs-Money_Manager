import { BiCalendarEvent, BiDollar } from 'react-icons/bi';
import { numberFormater } from '../../utils/numberFormater';

export default function MonthlyRow({date, expense}) {

  return (
    <div className="flex justify-between mb-2 flex-wrap border-b-2 border-dotted last:border-b-0 pb-2">
         <div className="flex items-center w-1/2"><BiCalendarEvent/> <span className='ml-2'>{date}</span></div>
        <div className="flex items-center w-1/2"><BiDollar/> <span className='ml-2 tracking-wider'>{numberFormater(expense)}</span></div>
    </div>
  )
}
