import React, { useState } from 'react'
import ProfileDrop from '../../component/ProfileDrop/ProfileDrop';
import './NavBar.css'
import { IoWalletSharp } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import SecondDrop from '../../component/SecondDrop/SecondDrop';
import { Link } from 'react-router-dom';
import ModalBooot from '../../component/ModalBooot/ModalBooot';
const NavBar = () => {
  
   const [openMenu, setOpenMenu] = useState(false);
   const [openSecond,setOpenSecond]= useState(false)
   const [show, setShow] = useState(false);

    const handleModal=()=>setShow(true)
   
    return (
   <div className='header'>
   <div className='aontainer '>
      <div className='header-container'>
        <div className='logo'>
           <Link className='Linkpro' to="/"><h2>Faucets</h2></Link>
        </div>
         
         <div className='right_content'>
           <div className='network' >
              <div onClick={()=>setOpenSecond(!openSecond)} className='network_State'>
                 <p className='small'> Arbitrum Rinkeby</p>
               
                 <span><BiChevronDown size={20} className='Biche'></BiChevronDown></span>
             {
               openSecond&&<SecondDrop openSecond={openSecond} setOpenMenu={setOpenSecond}></SecondDrop>
             }
            
              </div>
               
              <button onClick={handleModal} className='connectButton '> <IoWalletSharp size={20} className='LOWall'  style={{"margin-right":"10px"}}></IoWalletSharp> <p className='small'>Connect Wallet</p></button>
           

                
                  
                
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
      
      <ModalBooot show={show} setShow={setShow}></ModalBooot>
 
    </div>
  )
}

export default NavBar
