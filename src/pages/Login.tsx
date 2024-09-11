import React, { useState } from 'react'
import LoginForm from '../components/forms/LoginForm'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { authApi } from '../services/authApi'
import { useAppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";
import ToastVariant from '../components/core/ToastVariant'

const Login = () => {
const {user,setUser}=useAppContext();
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
      toast.custom((t) => (
        <ToastVariant t={t} message={`Witaj ${data?.name} miło Cie widziec!`} variant="SUCCESS"/>
        ))
  
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