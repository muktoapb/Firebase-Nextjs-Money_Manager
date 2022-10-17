import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { auth, db } from '../utils/firebase';



function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);
  // Get all income from DB
  const [allIncome, setAllIncome]=useState([]);
    const getIncome = async()=>{
        const collectionRef = collection(db,'money');
        const q = query(collectionRef, where("user", "==", user?user.uid:0 ) );
        const unsubscribe = onSnapshot(q,(snapshort)=>{
            setAllIncome(
                snapshort.docs.map((doc)=>(
                    {...doc.data(),id:doc.id}
                ))
            )
        });
        return unsubscribe;
    }
    useEffect(()=>{
        getIncome()
    },[user,loading])


  return (
    <Layout>
      <ToastContainer position='top-center' autoClose={1500}/>
      <Component {...pageProps} allIncome={allIncome}/>
    </Layout>
  )
}

export default MyApp
