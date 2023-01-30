import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";
import ReCAPTCHA from 'react-google-recaptcha';
import './SimpleFrom.css'
function SimpleFrom() {
  const [verified, setVerified] = useState(false);
  const handleRecaptcha = (value) => {
    console.log("Captcha value:", value);
    setVerified(true);
  };

  
    return (
    <div className="wallet-form mt-3">
    <Form onSubmit=''>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label className="custom-color custom-font fs-6 fw-semibold">
          Wallet Address
        </Form.Label>
        <Form.Control
          name="walletAddress"
          type="text"
          placeholder="Wallet Address..."
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="custom-color custom-font fs-6 fw-semibold">
          Request Type
        </Form.Label>
        <div className="d-flex ">
          <Form.Control
            name="requestType"
            className="w-50 me-2 requestType"
            type="text"
            disabled
            value={"20 Test Link"}
            placeholder="20 Test Link"
          />
          <Form.Control
            name="amount"
            className="w-50 ms-2 amount"
            type="text"
            disabled
            value={"0.5 ETH"}
            placeholder="0.5 ETH"
          />
        </div>
      </Form.Group>
     
          
       <ReCAPTCHA 
        className=""
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={handleRecaptcha}
        style={{"transform":"scale(0.77)", "WebkitTransform":"scale(0.77)" , "transformOrigin":"0 0" ,"WebkitTransformOrigin":"0 0",}}
      /> 
     

      <Button
        type="submit"
        className="rounded-1 border-0 "
        style={{ backgroundColor: "#9b1fe9" }}
        
      >
        Send Request
      </Button>
    </Form>
  </div>
  )
}

export default SimpleFrom
