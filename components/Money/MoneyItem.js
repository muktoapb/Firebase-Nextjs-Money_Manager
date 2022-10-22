import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { BiCalendarEvent, BiComment, BiDollarCircle, BiTrash } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { db } from '../../utils/firebase';

export default function MoneyItem({itemid,date, amount,text,expense, db_name}) {
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
    <div className="columns-2 md:columns-4  mb-2">
        <div className="flex items-center"><BiCalendarEvent/> <span className='ml-2'>{date}</span></div>
        <div className="flex items-center"><BiDollarCircle/> <span className='ml-2'>{amount}</span></div>
        <div className="flex items-center"><BiComment/> <span className='ml-2'>{text}</span></div>
        <button onClick={()=>deleteitem(itemid)} className="text-white w-6 h-6 text-sm bg-red-500 flex justify-center items-center rounded-full"><BiTrash/></button> 
    </div>
  )
}
