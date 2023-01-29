import React from 'react'
import { Button } from 'react-bootstrap'
import './ProfileDrop.css'
const ProfileDrop = (props) => {
  const {setOpenMenu, openMenu}=props
  
    return (
    <div>
    <ul onClick={() => setOpenMenu(!openMenu)} className="d-flex flex-column gap-2  DropProfile">
      <a src="/login">Log In</a>
      <a src="/signup">Sign Up</a>
      <a src="/faq"> FAQ</a>
    </ul>
  </div>
  )
}

export default ProfileDrop
