import axios from "axios"

const register= async({name,surname,email,password})=>{
    const config={
        withCredentials:true
    }
    const {data}= await axios.post("http://localhost:8000/api/auth/register",{
name,surname,email,password
    },config);
    return data;
}

const login= async({email,password})=>{
    const config={
        withCredentials:true
    }
    const {data}= await axios.post("http://localhost:8000/api/auth/login",{
email,password
    },config);
    return data;
}

const logout= async()=>{
    const config={
        withCredentials:true
    }
    const {data}= await axios.post("http://localhost:8000/api/auth/logout",{

    },config);
    return data;
}

const validateToken= async():Promise<void>=>{
    const config ={
        withCredentials:true
      }
    const {data}= await axios.get("http://localhost:8000/api/auth/validateToken",config);
    return data;
}



export const authApi={
    register,
    login,
    validateToken,
    logout
}