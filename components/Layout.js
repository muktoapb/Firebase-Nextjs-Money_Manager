import React from 'react'
import Header from './Header'
import Nav from './Nav'
export default function Layout({children}) {
  return (
    <div className="layout">
        <div className="sidebar">
            <Nav></Nav>
        </div>
        <div className="main_content">
        <Header/>
                {children}
        </div>
    </div>
  )
}
