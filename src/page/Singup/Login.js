import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AiOutlineGoogle, AiOutlineInstagram } from 'react-icons/ai';
import {FaFacebook}from 'react-icons/fa'
import Google from './Google';
const Login = () => {
   const[token,setToken]=useState([])  
  const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = {
          email,
          password,
        };
        console.log(user);

        fetch(`https://fulance-sever.onrender.com/api/v1/user/login`,{
          method:'POST',
         headers:{
             'content-type': 'application/json'
         },
         body:JSON.stringify(user)
       })
       .then(res=>res.json())
      .then(data=>{
         const Error=data;
         console.log(Error)
          setToken(Error)
        const accessToken = data.data.token ;    
         localStorage.setItem('accessToken',accessToken)
          
     })
      
      
  
      }
  
 
    return (
    <div className="custom-bgc form d-flex justify-content-center align-items-center">
    <Card className="form-card shadow-sm rounded-1 mx-4">
      <Card.Body>
        <Card.Title className="text-center fs-3 custom-font fw-semibold">
          Login
        </Card.Title>

        <Form onSubmit={handleLogin}>
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
          <Button
            type="submit"
            className="submit-btn border-0 btn rounded-1 fw-semibold mt-3"
          >
            Login
          </Button>{" "}
          <p className="text-center fw-semibold my-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-decoration-none custom-color">
              Signup
            </Link>
          </p>
          <h5 className="text-center">Or</h5>
          <div className="d-flex justify-content-center  my-4">
             <Google></Google>
            </div>
        </Form>
        
         <span>{token?.error}</span> 
         <span>{token?.status}</span> 
        
      </Card.Body>
    </Card>
  </div>
  )
}

export default Login
