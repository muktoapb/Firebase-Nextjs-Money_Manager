
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth, db } from '../../utils/firebase';



export default function AddEarning({ setStatus }) {
    const route = useRouter();
    const [user, loading, error] = useAuthState(auth);
    const [money, setMoney] = useState({ amount: '', date: '', comment: '', donate: 0, invest: 0, expense: 0 })
    const donateCal = (i) => (i * (2.5 / 100));
    const investCal = (i) => (i * (5 / 100));
    // console.log(user?.uid);

    useEffect(() => {
        const amountValue = money?.amount;
        const donate = Math.round(donateCal(amountValue) * 100) / 100;
        const invest = Math.round(investCal(amountValue) * 100) / 100;
        const expense = amountValue - (donate + invest);
        setMoney({ ...money, donate: donate, invest: invest, expense: expense })
    }, [money.amount]);

    const submitPost = async (e) => {
        e.preventDefault();
        //run check
        if (!money.amount || !money.date) {
            if (!money.amount) {
                toast.error("Put Earning!", {
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

        const collectionRef = collection(db, 'money');
        await addDoc(collectionRef, {
            ...money,
            timestamp: serverTimestamp(),
            user: user?.uid,
        });
        setStatus(false);
        setMoney({ amount: '', date: '', comment: '', donate: 0, invest: 0, expense: 0 });
        toast.success("Earning Added!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        })
        return;

    }

    // console.log(money);
    return (
        <div className="add_input">
            <form className='form_area flex flex-wrap' onSubmit={submitPost}>
                <div className="w-1/2 my-2 pr-1"><input className='w-full field_design mr-2' type="number" placeholder='Earning' value={money?.amount}
                    onChange={(e) => setMoney({ ...money, amount: Number(e.target.value) })} /></div>
                      <div className="w-1/2 my-2 pl-1"><input className='w-full field_design' type="date" name="date" id="" placeholder='date' value={money?.date}
                    onChange={(e) => setMoney({ ...money, date: e.target.value })} /></div>
                 <div className="w-full"><textarea className='w-full field_design my-2' name="comment" placeholder='Comments' value={money?.comment}
                    onChange={(e) => setMoney({ ...money, comment: e.target.value })}></textarea></div>
                <div className="w-full"><input className='bg-sky-500 inline-block text-white px-4 py-1 rounded-sm text-sm cursor-pointer hover:bg-sky-600' type="submit" value="Add" /></div>
                
            </form>
            <p className='text-xs text-slate-400 mt-2'>Donate: <b>{money?.donate}</b>, Invesment: <b>{money?.invest}</b></p>
        </div>

    )
}
