import React, { useState } from 'react'
import LoginForm from '../components/forms/LoginForm'
import { useMutation } from '@tanstack/react-query'
import { authApi } from '../services/authApi'

const Login = () => {

  const [errorMessage,setErrorMessage]=useState<string>("")
  const {mutate}=useMutation({
    mutationFn:({email,password})=>{
      return authApi.login({email,password})
    },
    onSuccess:()=>{
  
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