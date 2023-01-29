import React, { useState } from 'react'
import ProfileDrop from '../../component/ProfileDrop/ProfileDrop';
import './NavBar.css'
import { IoWalletSharp } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);


    return (
   <div className='header'>
   <div className='container '>
      <div className='header-container'>
        <div className='logo'>
           <a><h2>Faucets</h2></a>
        </div>
         
         <div className='right_content'>
           <div className='network' >
              <div className='network_State'>
                 <p className='small'> Arbitrum Rinkeby</p>
               
                 <span><BiChevronDown size={20} className='Biche'></BiChevronDown></span>
              </div>
               
              <button className='connectButton'> <IoWalletSharp className='LOWall'  style={{"margin-right":"10px"}}></IoWalletSharp> <p className='small'>Connect Wallet</p></button>
           
           </div>
           
           <div onClick={() => setOpenMenu(!openMenu)} className='profile-button' >
            
              <BiUserCircle size={30} className="Pro "></BiUserCircle>
           
              {openMenu&&
                <ProfileDrop  openMenu={openMenu}
                setOpenMenu={setOpenMenu}> </ProfileDrop>
              }
           </div>

         </div>
      </div>
    </div>

    </div>
  )
}

export default NavBar
