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
          <div className='min-h-screen bg-slate-50 h-full font-SourceSansPro'>
          <Header />
          <div className="flex font-Poppins min-h-screen">
            <div className="w-80 py-8 min-h-screen">
            <Sidebar/>
            </div>
            <div className="w-full">
              <div className="py-8 px-8">
              {children}
              </div>
            </div>
          </div>
          </div>
          
          :
          <Login />
      }
    </>

  )
}
