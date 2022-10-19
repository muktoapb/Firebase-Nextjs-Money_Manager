import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';



export default function Header() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="header_area">
      {
        !user ? (
          <Link href="/login">
            Login
          </Link>
        ) : (

          <div className="dsds">
            <button  onClick={() => auth.signOut()}>Logout</button>
            <Image height={30} width={30} alt={user?.displayName} src={user?.photoURL}/>
          </div>
          
        )
      }

    </div>
  )
}
