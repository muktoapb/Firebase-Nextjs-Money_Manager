import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';
import Header from './Header';
import Login from './Login';
import Nav from './Nav';



export default function Layout({ children }) {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      {
        user ?
          <div className="layout">
            <div className="sidebar">
              <Nav></Nav>
            </div>
            <div className="main_content">
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
