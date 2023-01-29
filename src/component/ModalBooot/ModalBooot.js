import React from 'react'
import Modal from "react-bootstrap/Modal";
import './ModalBooot.css'
const ModalBooot = (props) => {
  const {show,setShow}=props;
  
  const handleClose = () => setShow(!true);

  return (
    <div >
    <Modal  className='md-down modall-container' show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton className="border-0">
        <Modal.Title className="custom-font fw-bold">
          Connect your wallet
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column flex-md-row justify-content-center ">
        <div className="wallet">
          <a href="/">
            <img
              src="https://faucets.netlify.app/static/media/MetaMask.551edf10.svg"
              alt=""
            />
          </a>
        </div>
        <div className="wallet">
          <a href="/">
            <img
              src="https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg"
              alt=""
            />
          </a>
        </div>
      </Modal.Body>
    </Modal>
  </div>

  )
}

export default ModalBooot

 