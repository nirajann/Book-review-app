
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, FormGroup,Input, Label ,Button} from 'reactstrap';
import userService from '../services/userService'

import "../login.css"

const Login = (e) =>{
    const [username,setusername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin= (e) => {
            e.preventDefault();
            userService.login({username,password}).then(res => {
                alert(res.data)
                window.localStorage.setItem(`token`,res.data.token)
                navigate("/")
            
            }).catch(err => console.log(err))
           
    }

        
    return(
        <>
        <h1>Login</h1>
    <Form onSubmit={handleLogin}>
    <FormGroup>
    <Label for="exampleusername" className="d-block font-weight-bold">
        Username
      </Label>
      <Input
        id="exampleusername"
        name="Usename"
        placeholder="Username"
        type="username"
        value ={username}
        onChange={(e)=> setusername(e.target.value)}
        className="form-control"
      />

    </FormGroup>
    {' '}
    <FormGroup>
    <Label for="examplePassword" className="d-block font-weight-bold">
        Password
      </Label>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
        value ={password}
        onChange={(e)=> setPassword(e.target.value)}
        className="form-control"
      />
    </FormGroup>
    {' '}
    {' '}
    <Button color='primary' className="btn btn-primary btn-block" onSubmit={Login}>
      Login 
    </Button>
  </Form>
    </>
    )
};

export default Login;