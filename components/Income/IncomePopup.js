
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { auth, db } from '../../utils/firebase';



export default function IncomePopup() {
    const route = useRouter();
    const [user, loading, error] = useAuthState(auth);
    const [money, setMoney] = useState({ income: '', date: '', comment: '', donate: 0, invest: 0 })
    const donateCal = (i) => (i * (2.5 / 100));
    const investCal = (i) => (i * (5 / 100));
    // console.log(user?.uid);

    useEffect(() => {
        const incomeValue = money?.income;
        const donate = donateCal(incomeValue);
        const invest = investCal(incomeValue);
        setMoney({ ...money, donate: donate, invest: invest })
    }, [money.income]);

    const submitPost = async (e) => {
        e.preventDefault();
        //run check
        if (!money.income || !money.date) {
            if (!money.income) {
                toast.error("Put income! 🤑", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000
                })
            }
            if (!money.date) {
                toast.error("Put Date 📅", {
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
        setMoney({ income: '', date: '', comment: '', donate: 0, invest: 0 });
        return;

    }

    console.log(money);
    return (
        <div className="add_input">
            <form className='form_area' onSubmit={submitPost}>
                <input type="number" placeholder='income' value={money?.income}
                    onChange={(e) => setMoney({ ...money, income: Number(e.target.value) })} /> <br />
                <input type="date" name="date" id="" placeholder='date' value={money?.date}
                    onChange={(e) => setMoney({ ...money, date: e.target.value })} /> <br />
                <textarea name="comment" placeholder='comments' value={money?.comment}
                    onChange={(e) => setMoney({ ...money, comment: e.target.value })}></textarea><br />
                <input type="submit" value="Add" />
            </form>
        </div>

    )
}
