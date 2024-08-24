import axios from "axios"

const register= async({name,surname,email,password})=>{
    const {data}= await axios.post("http://localhost:8000/api/auth/register",{
name,surname,email,password
    });
    return data;
}

const login= async({email,password})=>{
    const {data}= await axios.post("http://localhost:8000/api/auth/login",{
email,password
    });
    return data;
}




export const authApi={
    register,
    login,
}