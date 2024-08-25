import React, { useState } from 'react'
import TextBox from '../core/TextBox'
import Button from '../core/Button'
import { useForm } from 'react-hook-form';
import * as types from "../../types/index";




interface IRegisterFormProps{
    onSave:(formData:types.IRegisterFormData)=>void;
    errorMessage?:string;
    sucessMessage?:string;
}

const RegisterForm:React.FC<IRegisterFormProps> = ({onSave,errorMessage,sucessMessage}) => {
    
    const {register, formState: { errors  },handleSubmit,watch}=useForm({
        defaultValues:{
          name:"",
          surname:"",
          email:"",
          password:"",
          confirmPassword:"",
        },
        mode: "onChange",
      })



    
      const validatePassword = (val: string): boolean => {
        if (val.length < 8) return false;
      
        const hasDigit = /\d/.test(val);
        const hasLowerCase = /[a-z]/.test(val);
        const hasUpperCase = /[A-Z]/.test(val);
        const hasLetter = /[a-zA-Z]/.test(val);
        const hasSpecialChar = /[!@#$%^&*(),.?":;{}|<>]/.test(val);
      
        return (
          hasDigit && hasLowerCase && hasUpperCase && hasLetter && hasSpecialChar
        );
      };

console.log(errorMessage)
const onSubmit= handleSubmit((data)=>{
    onSave(data)
  console.log(data)
})


  return (
    <div className='w-full p-4 md:p-1 flex flex-col justify-center items-center min-h-full'>
  <form
    onSubmit={onSubmit}
    className='form-container w-full md:w-[440px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'
  >
    <div className=''>
      <p className='text-blue-600 text-3xl font-bold text-center'>
        Załóż konto
      </p>
      <p className='text-center text-base text-gray-600 mt-4'>
      aby mieć dostęp do gotowych szablonów odpowiedzi.
      </p>
    </div>

    <div className='flex flex-col gap-y-5'>
      <TextBox
        placeholder='email@example.com'
        type='text'
        name='name'
        label='Imię'
          className='w-full rounded-lg'
        register={register("name", {
          required: "Imię jest wymagane",
        })}
        error={errors.name ? errors.name.message : ""}
      />
      <TextBox
        placeholder='your password'
        type='text'
        name='surname'
        label='Nazwisko'
        className='w-full rounded-lg'
        register={register("surname", {
          required: "Nazwisko jest wymagane",
        })}
        error={errors.surname ? errors.surname.message : ""}
      />
          <TextBox
        placeholder='your password'
        type='email'
        name='email'
        label='Email'
         className='w-full rounded-lg'
        register={register("email", {
          required: "Email jest wymagany",
        })}
        error={errors.email ? errors.email.message : ""}
      />
               <TextBox
        placeholder='your password'
        type='password'
        name='password'
        label='Hasło'
         className='w-full rounded-lg'
        register= {register("password", {
            validate: (val) =>
              validatePassword(val) ||
              "Hasło powinno zawierać co najmniej 8 znaków, w tym co najmniej 1 cyfrę, 1 literę, 1 wielką literę, 1 małą literę oraz 1 znak specjalny.",
          })}
        error={errors.password ? errors.password.message : ""}
      />
                  <TextBox
        placeholder='your password'
        type='password'
        name='confirmPassword'
        label='Potwierdź hasło'
         className='w-full rounded-lg'
        register={register("confirmPassword", {
            validate: (val) => {
              const passwordValue = watch("password");
              if (val !== passwordValue) {
                return "Hasła nie są takie same";
              }
            },
          })}
        error={errors.confirmPassword ? errors.confirmPassword.message : ""}
      />

      <span className='text-sm text-gray-500 hover:text-blue-600 hover:underline cursor-pointer'>
        Zapomniałeś hasła?
      </span>

      <Button
        type='submit'
        label='Utwórz'
        className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      />
    </div>
{    errorMessage && <span className='block text-center font-semibold text-sm text-rose-600'>{errorMessage}</span>}
{    sucessMessage && <span className='block text-center font-semibold text-sm text-green-600'>{sucessMessage}</span>}
  </form>
</div>
  )
}

export default RegisterForm