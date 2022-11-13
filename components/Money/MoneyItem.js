import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { BiCalendarEvent, BiComment, BiDollar, BiTrash } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { db } from '../../utils/firebase';
import { numberFormater } from '../../utils/numberFormater';

export default function MoneyItem({itemid,date, amount,text, db_name}) {
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
    <div className="flex flex-wrap justify-between mb-2 border-b-2 border-dotted last:border-b-0 pb-2">
        <div className="flex items-center w-1/2 md:w-1/4"><BiCalendarEvent/> <span className='ml-2'>{date}</span></div>
        <div className="flex items-center w-1/2 md:w-1/5"><BiDollar/> <span className='ml-2 tracking-wider'>{numberFormater(amount)}</span></div>
        <div className="flex items-center w-1/2"><BiComment/> <span className='ml-2'>{text}</span></div>
        <button onClick={()=>deleteitem(itemid)} className="text-white w-6 h-6 text-sm bg-red-500 flex justify-center items-center rounded-full"><BiTrash/></button> 
    </div>
  )
}
