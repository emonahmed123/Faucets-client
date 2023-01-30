import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../component/Sidebar/Sidebar'

const DashBoard = () => {
  return (
    <div className='d-flex'>
      <Sidebar></Sidebar>
        
        <Outlet></Outlet>
        
    </div>
  )
}

export default DashBoard
