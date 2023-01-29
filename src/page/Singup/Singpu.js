import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap"
const Singpu = () => {
 
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')



 const handleSignUp =e=>{




 }

 
 
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
             onChange={()=>{setEmail(e.target.email.value)}}
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
          </Button>
          <p className="text-center fw-semibold my-3">
            Already have an account?
            <Link to="/login" className="text-decoration-none custom-color">
              Login
            </Link>
          </p>
          <h5 className="text-center">Or</h5>
          <div className="d-flex justify-content-center my-4">
            <GoogleSignIn></GoogleSignIn>
          </div>
        </Form>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Singpu
