import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
 
    return (
    <div className="bontainer">
    <div style={{width: isOpen ? "200px" : "60px"}} className="sidebar">
        <div className="top_section">
            <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
            <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                <FaBars onClick={toggle}/>
            </div>
        </div>
        
          
                <Link to='/dashboard' className="link" activeclassName="active">
                 Profile
                </Link>
                <Link to='All' className="link" activeclassName="active">
                AllUser
                </Link>

                <Link className="link" to="/">Back</Link>

</div>
    
 </div>
  )
}

export default Sidebar
