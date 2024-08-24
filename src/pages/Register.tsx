import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { authApi } from '../services/authApi';
import { Link } from 'react-router-dom';
import TextBox from '../components/core/TextBox';
import Button from '../components/core/Button';
import RegisterForm from '../components/forms/RegisterForm';
const Register = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [sucessMessage, setSuccessMessage] = useState<string>("");


const {mutate}=useMutation({
  mutationFn:({name,surname,email,password})=>{
    return authApi.register({name,surname,email,password})
  },
  onSuccess:()=>{
    setSuccessMessage("Account has been created, please check your email to confirm ")
  }
  ,
  onError:(error)=>setErrorMessage(error?.response?.data?.message)
})


const onSave=(formData)=>{
mutate(formData)
}

return (
  <RegisterForm onSave={onSave} errorMessage={errorMessage} sucessMessage={sucessMessage}/>
);
}

export default Register