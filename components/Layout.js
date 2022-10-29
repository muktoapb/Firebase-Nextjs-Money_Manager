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
          <div className='min-h-screen bg-slate-50 md:h-full font-SourceSansPro pb-20 md:pb-0'>
            <Header />
            <div className="md:flex font-Poppins min-h-screen">
              <div className="fixed md:relative bottom-0 left-0 md:w-80 w-full py-4 md:py-8 md:min-h-screen z-50">
                <Sidebar />
              </div>
              <div className="w-full">
                <div className="py-4 md:py-8 px-4 md:px-8">
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
