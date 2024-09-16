import React from 'react'
import TextBox from '../core/TextBox'
import Button from '../core/Button'
import { useAppContext } from '../../contexts/AppContext';
import { useForm } from 'react-hook-form';

const UserProfileForm = ({user}) => {
  const {closeContentModal} = useAppContext();



  const {
    watch,
    setValue,
    register,
    control,
    setError,
    clearErrors,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues:{
      name: user ? user?.name: "",
      surname: user ? user?.surname: "",
      email: user ? user?.email: "",
    },
    mode: "onChange",
  });



  return (
    <div className='w-full p-4 md:p-1 flex flex-col items-center min-h-full'>
    <form
      className='form-container 2xl:w-[720px] sm:w-fit lg:w-[600px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'
    >
      <div className='flex flex-col gap-y-7'>
        <TextBox
          placeholder='imię'
          type='text'
          name='name'
          label='Imię'
          className='w-full rounded-lg'
          register={register("name", {
            required: "Tytuł jest wymagany",
          })}
        />
        <TextBox
          placeholder='nazwisko'
          type='text'
          name='surname'
          label='Nazwisko'
          className='w-full rounded-lg'
          register={register("surname", {
            required: "Tytuł jest wymagany",
          })}
        />
        <TextBox
          placeholder='email'
          type='email'
          name='email'
          label='Email'
          className='w-full rounded-lg'
          register={register("email", {
            required: "Tytuł jest wymagany",
          })}
        />
  <div className='flex justify-end gap-5'>
  <Button
       onClick={closeContentModal}
          label='Anuluj'
          className='flex  justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-slate-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        />
                   <Button
          type='submit'
          label='Zapisz'
          className='flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        />
  </div>
      </div>
    </form>
  </div>
  )
}

export default UserProfileForm