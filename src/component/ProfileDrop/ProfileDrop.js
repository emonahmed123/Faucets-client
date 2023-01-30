import React from 'react'
import { Button } from 'react-bootstrap'
import './ProfileDrop.css'
import { Link } from "react-router-dom";
const ProfileDrop = (props) => {
  const {setOpenMenu, openMenu}=props
   
    return (
    <div>
    <ul onClick={() => setOpenMenu(!openMenu)} className="DropProfile">
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/faq"> FAQ</Link>
      <Link to ="/dashboard"> DashBoard</Link>
    </ul>
  </div>
  )
}

export default ProfileDrop
