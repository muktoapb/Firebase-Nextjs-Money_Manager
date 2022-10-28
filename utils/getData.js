import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from './firebase';

export const GetData = () => {
    // All state to store data
    const [user, loading, error] = useAuthState(auth);
    const [allIncome, setAllIncome] = useState([]);
    const [alldonate, setAlldonate] = useState([]);
    const [allexpense, setAllexpense] = useState([]);
    const [allinvestment, setAllinvestment] = useState([]);
    //Getting Data from DB
    const addDB = async (db_Name, stateName) => {
        const collectionRef = collection(db, db_Name);
        const q = query(collectionRef, where("user", "==", user ? user.uid : 0));
        const unsubscribe = onSnapshot(q, (snapshort) => {
            stateName(
                snapshort.docs.map((doc) => (
                    { ...doc.data(), id: doc.id }
                ))
            )
        });
        return unsubscribe;
    }

    useEffect(() => {
        addDB('money', setAllIncome)
        addDB('donate', setAlldonate)
        addDB('expense', setAllexpense)
        addDB('investment', setAllinvestment)
    }, [user, loading])
    let dbdata = {main:allIncome, donate: alldonate, expense:allexpense, investment:allinvestment}
    return dbdata;
}
