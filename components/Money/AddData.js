
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth, db } from '../../utils/firebase';



export default function AddData({setStatus , dbName, title}) {
    const route = useRouter();
    const [user, loading, error] = useAuthState(auth);
    const [money, setMoney] = useState({ amount: '', date: '', comment: '' })
   
    // console.log(user?.uid);

    // useEffect(() => {
    //     const amountValue = money?.amount;
    //     setMoney({ ...money, donate: donate, invest: invest, expense: expense })
    // }, [money.amount]);

    const submitPost = async (e) => {
        e.preventDefault();
        //run check
        if (!money.amount || !money.date) {
            if (!money.amount) {
                toast.error("Put Amount!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000
                })
            }
            if (!money.date) {
                toast.error("Put Date!", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000
                })
            }
            return;
        }

        const collectionRef = collection(db, dbName);
        await addDoc(collectionRef, {
            ...money,
            timestamp: serverTimestamp(),
            user: user?.uid,
        });
        setMoney({ amount: '', date: '', comment: '' });
        setStatus(false);
        toast.success(title+" Added!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        })
        return;

    }

    // console.log(money);
    return (
        <div className="add_input">
            <form className='form_area flex flex-wrap' onSubmit={submitPost}>
                <div className="w-1/2 my-2 pr-1"><input className='w-full field_design' type="number" placeholder='Amount' value={money?.amount}
                    onChange={(e) => setMoney({ ...money, amount: Number(e.target.value) })} /></div>
                <div className="w-1/2 my-2 pl-1">
                <input className='w-full field_design' type="date" name="date" id="" placeholder='date' value={money?.date}
                    onChange={(e) => setMoney({ ...money, date: e.target.value })} />
                </div>
                <div className="w-full"><textarea className='w-full field_design' name="comment" placeholder='Comments' value={money?.comment}
                    onChange={(e) => setMoney({ ...money, comment: e.target.value })}></textarea></div>
                <div className="w-full"> <input className='bg-sky-500 inline-block text-white px-4 py-1 rounded-sm text-sm cursor-pointer hover:bg-sky-600' type="submit" value="Add" /></div>
               
            </form>
        </div>

    )
}
