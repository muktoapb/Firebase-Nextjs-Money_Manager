import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';



export default function Header() {
    const [user, loading, error] = useAuthState(auth);
    // useEffect(()=>{

    // },[user])

// console.log(user);
  return (
    <div className="header_area">
        <nav>
            {
            !user ?(
            <Link href="/login">
                Login
            </Link>
            ):(
                <div className="logedinmenu">
                        <img src={user?.photoURL} alt={user?.displayName} width='60' height="60"/>
                    
                    <Button variant='contained' onClick={()=>auth.signOut()}>Logout</Button>
                </div>
            )
            }

        </nav>
    </div>
  )
}
