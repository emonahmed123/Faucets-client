import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../page/SharedPages/NavBar'

const Main = () => {
  return (
    <div>
       <NavBar></NavBar>
       <Outlet></Outlet>
       
    </div>
  )
}

export default Main
