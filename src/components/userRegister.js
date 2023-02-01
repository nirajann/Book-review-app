import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col,FormFeedback } from "reactstrap";
import { useEffect, useState } from 'react';

import "../Registration.css";

const Registraion = () => {
    const [Username,setusername] = useState('name')
    const [Password,setPassword] = useState('')
    const [Email,setEmail] = useState('')
    const [Confirmpassword,setConfirmpassword] = useState('')
    const [message,setMessage] = useState('')
    const [valid,setvalid] = useState('')

    const handleRegister = (e) => {
        console.log("regitseres")
        axios.post('http://localhost:3000/users/regitser',{Username,Password})
        .then(response => console.log(response.data))
        .catch(err => console.log(err))
    }

    // const handlePassword = (e) => {
    //     setConfirmpassword(e.target.value)
    //     if (Password !== Confirmpassword){
    //         setMessage('Password doesnt match')
    //         setvalid('is-invalid')
            
    //     }else{
    //         setMessage('password matched')
    //         setvalid('is-valid')
    //     }

    useEffect(() => {
        if (Password !== Confirmpassword){
                setMessage('Password doesnt match')
                setvalid('is-invalid')
                return
        }
            setMessage('password matched')
            setvalid('is-valid')
                
    },[Confirmpassword])
  
    return (
      <div className="registration-form">
        <Container>
          <Row>
            <Col>
              <Form>
                <h3>Create an account</h3>
                <div className="form-group">
                  <label>Name</label>
                  <input type="name" className="form-control" placeholder="Enter name"    value ={Username}
        onChange={(e)=> setusername(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter email" 
                     value ={Email}
                     onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter password" 
                     value ={Password}
                     onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" className="form-control" placeholder="Confirm password" 
                     value ={Confirmpassword}
                     onChange={(e)=> setConfirmpassword(e.target.value)}
                     />
                    <FormFeedback>
                     {message}
                   </FormFeedback>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">I accept the Terms of Use & Privacy Policy</label>
                  </div>
                </div>
                <Button type="submit" className="btn btn-primary btn-block" onClick={handleRegister}>Sign Up</Button>
                <p className="forgot-password text-right">
                  Already registered? <a /*href*/ >Sign in</a>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Registraion