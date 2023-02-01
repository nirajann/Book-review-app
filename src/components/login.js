

import { useEffect, useState } from 'react';
import {Form, FormGroup,Input, Label ,Button, FormFeedback} from 'reactstrap';

const Login = () =>{
    const [username,setusername] = useState('')
    const [password,setPassword] = useState('')
        
    return(
        <>
        <h1>Login</h1>
    <Form>
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
        value ={uassword}
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