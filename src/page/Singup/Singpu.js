import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom';
import './Singpu.css'
import { AiOutlineGoogle, AiOutlineInstagram } from 'react-icons/ai';
import {FaFacebook}from 'react-icons/fa'
const Singpu = () => {
  const [error,setError]=useState([]);
  const handleSignUp = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = {
      email, password
    };
    console.log(user);
     
    if(user){
      fetch(`https://fulance-sever.onrender.com/api/v1/user/signup`,{
        method:'POST',
       headers:{
           'content-type': 'application/json'
       },
       body:JSON.stringify(user)
     })
     .then(res=>res.json())
    .then(data=> setError(data))
    }

  } 

 console.log(error)
 
    return (
     
      <div className="custom-bgc form d-flex justify-content-center align-items-center">
      <Card className="form-card shadow-sm rounded-1 mx-4">
        <Card.Body>
          <Card.Title className="text-center fs-3 custom-font fw-semibold">
            Sign Up
          </Card.Title>

          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="custom-font fw-semibold mb-0">
                Email
              </Form.Label>
              <Form.Control
                className="border-0 ps-0 rounded-0 border-bottom border-b-2 input"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label className="custom-font fw-semibold mb-0">
                Password
              </Form.Label>
              <Form.Control
                className="border-0 ps-0 rounded-0 border-bottom border-b-2"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </Form.Group>
            <Button type="submit" className="submit-btn border-0 btn rounded-1 fw-semibold mt-3">
              Sign Up
            </Button>{" "}
            <p className="text-center fw-semibold my-3">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none custom-color">
                Login
              </Link>
            </p>
            <h5 className="text-center">Or</h5>
            <div className="d-flex justify-content-center  my-4">
              <AiOutlineGoogle style={{"margin-right":"20px"}} size={22}/>
              <FaFacebook style={{"margin-right":"20px"}}  size={20}/>
              <AiOutlineInstagram size={20}/>
            </div>
          </Form>
        
        <div>
         <p>{error?.error}</p> 
         <p>{error?.status}</p> 
        </div>
        </Card.Body>
        
      </Card>
    </div>


  )
}

export default Singpu
