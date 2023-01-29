import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom';
import './Singpu.css'
const Singpu = () => {
 


 
    return (
      <div className="custom-bgc Auth_container form d-flex justify-content-center align-items-center">
      <Card className=" SingupCard  ">
        <Card.Body>
          <Card.Title className="text-center fs-4 All_font fw-bold">
            Sign Up
          </Card.Title>

          <Form onSubmit=''>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="Allfont fw-semibold mb-0">
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
              <Form.Label className="Allfont fw-semibold mb-0">
                Password
              </Form.Label>
              <Form.Control
                className="border-0 ps-0 rounded-0 border-bottom border-b-2"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </Form.Group>
            <button type="submit" className="submit-btn w-full border-0 btn rounded-1 fw-semibold mt-3">
              Sign Up
            </button>{" "}
            <p className="text-center fw-semibold my-3">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none custom-color">
                Login
              </Link>
            </p>
            <h5 className="text-center">Or</h5>
            <div className="d-flex justify-content-center my-4">
              {/* <GoogleSignIn></GoogleSignIn> */}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>


  )
}

export default Singpu
