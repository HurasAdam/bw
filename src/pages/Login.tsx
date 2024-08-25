import React, { useState } from 'react'
import LoginForm from '../components/forms/LoginForm'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { authApi } from '../services/authApi'
import { useAppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const {setUser}=useAppContext();
  const [errorMessage,setErrorMessage]=useState<string>("")
  const { showToast,isLoggedIn } = useAppContext();
  const queryClient = useQueryClient();
const navigate = useNavigate();




  const {mutate}=useMutation({
    mutationFn:({email,password})=>{
      return authApi.login({email,password})
    },
    onSuccess:(data)=>{
      setUser(data)
      // navigate("/")
  showToast({message:"Wiaj, milo Cie widziec",type:"SUCCESS"});
  
    }
    ,
    onError:(error)=>setErrorMessage(error?.response?.data?.message)
  })
  
  
  const onSave=(formData)=>{
  mutate(formData)
  }


  return (
   <LoginForm onSave={onSave} errorMessage={errorMessage} />
  )
}

export default Login