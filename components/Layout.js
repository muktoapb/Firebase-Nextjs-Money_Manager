import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './SideBar/Sidebar';


export default function Layout({ children }) {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      {
        user ?
          <div className="bg-slate-50 flex font-Poppins">
            <div className="w-80">
            <Sidebar/>
            </div>
            <div className="w-full">
              <Header />
              {children}
            </div>
          </div>
          :
          <Login />
      }
    </>

  )
}
