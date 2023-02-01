import axios from 'axios'

const baseURL = "http://localhost:4000/users"

const login = (credentials) =>{
    return axios.post(`${baseURL}/login`,credentials)
}

const register = (userDetails) =>{
    return axios.post(`${baseURL}/register`,userDetails)
}


export default {login,register}