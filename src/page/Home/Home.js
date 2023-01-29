import React from 'react'
import './Home.css'

import { NavLink, Outlet } from 'react-router-dom'
import {AiFillWarning} from 'react-icons/ai'
import SimpleFrom from '../../component/SimpleFrom/SimpleFrom'
const Home = (props) => {

  
  const navActive = ({ isActive }) => {
    return {
      fontWeight: isActive ? "500" : "normal",
      backgroundColor: isActive ? "#0000ff" : "#f5f7fd",
      padding: "8px 10px",
      textDecoration: "none",
      color: isActive ? "white" : "black",
    };
  };
 
 
 
 
  return (
    <div>
        <div className="home pb-4">
      <div className="notice-board d-flex justify-content-center align-items-center">
        <p className="m-0 text-white fw-semibold">Notice here</p>
      </div>

      <div className="content-title my-5 custom-font px-4 mx-1">
        <h2 className="custom-color fw-bold fs-1 mb-3">Request testnet LINK</h2>
        <p className=" text-secondary">
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can create and test your own oracle and Chainlinked
          smart contract
        </p>
      </div>

      <div className="p-3 bg-white home-content">
        <div className="warning d-flex align-items-center">
        <AiFillWarning className="mb-1 fs-5 me-2 custom-color edit"></AiFillWarning>{" "}
          
          <p className="m-0 p-2 ">
           
            Your wallet is connected to{" "}
            <span className="fw-bold">Ethereum Kovan</span>, so you are
            requesting <span className="fw-bold">Ethereum Kovan</span> Link/ETH.
          </p>
        </div>
       <div>
           <SimpleFrom> </SimpleFrom> 
        </div>

        <div className="mt-4 pt-1">
          <h6 className="mb-4 custom-font fs-6 fw-bold">Request History</h6>
          <div className="navlink-container ">
            <NavLink style={navActive} to="etht" className="rounded-1 navlink">
              ETH Transaction History
            </NavLink>
            <NavLink
              style={navActive}
              className="ms-2 rounded-1 navlink"
              to="test"
            >
              TestLink Transaction History
            </NavLink>
          </div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
