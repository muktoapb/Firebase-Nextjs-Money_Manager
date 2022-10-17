import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { toast } from 'react-toastify';
import { db } from '../../utils/firebase';

export default function MoneyItem({itemid,date, amount,text}) {

  const deleteitem = async (id)=>{
      const docRef = doc(db, 'money', id);
      
      if (confirm('Are you sure?')) {
        await deleteDoc(docRef);
        toast.success("Item deleted")
      }else{
        toast.error("Delete cancel")
      }
  }


  return (
    <div className="money_item">
        <p>{date} - {amount} - {text}</p>
        <button onClick={()=>deleteitem(itemid)}>delete</button> 
        <button>edit</button> 
    </div>
  )
}
