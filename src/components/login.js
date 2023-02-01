

import { useEffect, useState } from 'react';
import {Form, FormGroup,Input, Label ,Button} from 'reactstrap';
import userService from '../services/userService'

const Login = (e) =>{
    const [username,setusername] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin= (e) => {
            e.preventDefault();
            userService.login({username,password}).then(res => {
                alert(res.data)
                window.localStorage.setItem(`token`,res.data.token)
            
            }).catch(err => console.log(err))
           
    }

        
    return(
        <>
        <h1>Login</h1>
    <Form onSubmit={handleLogin}>
    <FormGroup floating>
    <Label for="exampleusername">
        username
      </Label>
      <Input
        id="exampleusername"
        name="Usename"
        placeholder="Username"
        type="username"
        value ={username}
        onChange={(e)=> setusername(e.target.value)}
      />

    </FormGroup>
    {' '}
    <FormGroup floating>
    <Label for="examplePassword">
        Password
      </Label>
      <Input
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="password"
        value ={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
    </FormGroup>
    {' '}
    {' '}
    <Button color='primary' >
      Login 
    </Button>
  </Form>
    </>
    )
};

export default Login;