
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, FormGroup,Input, Label ,Button, FormFeedback} from 'reactstrap';


const Register = () =>{
    const [Username,setusername] = useState('name')
    const [Password,setPassword] = useState('')
    const [Confirmpassword,setConfirmpassword] = useState('')
    const [message,setMessage] = useState('')
    const [valid,setvalid] = useState('')
    const navigate = useNavigate()

    const handleRegister = (e) => {
        console.log("regitsered")
        axios.post('http://localhost:4000/users/register',{Username,Password})
        .then(response => {
          window.alert(response.data.status)
          navigate("/Login")
        })
        .catch(err => console.log(err))
    }



    useEffect(() => {
        if (Password !== Confirmpassword){
                setMessage('Password doesnt match')
                setvalid('is-invalid')
                return
        }
            setMessage('password matched')
            setvalid('is-valid')
                
    },[Confirmpassword])
        
    return(
        <>
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
        value ={Username}
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
        value ={Password}
        onChange={(e)=> setPassword(e.target.value)}
      />
    </FormGroup>
    {' '}
    {' '}
    <FormGroup floating>
    <Label for="exampleConfirmPassword">
        Confirm Password
      </Label>
    <Input 
    className={valid}
        id="exampleConfirmPassword"
        name="Confirmpassword"
        placeholder="Confirm Password"
        type="password"
        value ={Confirmpassword}
        onChange={(e) => setConfirmpassword(e.target.value)}
      />
       <FormFeedback >
            {message}
          </FormFeedback>

    </FormGroup>
    <Button color='primary' onClick={handleRegister}>
      Register
    </Button>
  </Form>
    </>
    )
};

export default Register;