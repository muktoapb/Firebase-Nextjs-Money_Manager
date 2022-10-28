import { deleteDoc, doc } from 'firebase/firestore';
import { BiCalendarEvent, BiDonateHeart } from 'react-icons/bi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { MdPayment } from 'react-icons/md';
import { toast } from 'react-toastify';
import { db } from '../../utils/firebase';
import { numberFormater } from '../../utils/numberFormater';

export default function ItemRow({itemid,date, expense,donate,invest ,text, db_name}) {
// console.log(db_name);
  const deleteitem = async (id)=>{
      const docRef = doc(db, db_name, id);
      
      if (confirm('Are you sure?')) {
        await deleteDoc(docRef);
        toast.success("Item deleted !")
      }else{
        toast.error("Delete Cancled !")
      }
  }


  return (
    <div className="flex justify-between mb-2 flex-wrap border-b-2 border-dotted last:border-b-0 pb-1">
         <div className="flex items-center w-1/4"><BiCalendarEvent/> <span className='ml-2'>{date}</span></div>
        <div className="flex items-center w-1/5"><MdPayment/> <span className='ml-2 tracking-wider'>{numberFormater(expense)}</span></div>
        <div className="flex items-center w-1/5"><BiDonateHeart/> <span className='ml-2 tracking-wider'>{numberFormater(donate)}</span></div>
        <div className="flex items-center w-1/5"><IoBriefcaseOutline/> <span className='ml-2 tracking-wider'>{numberFormater(invest)}</span></div>
    </div>
  )
}
