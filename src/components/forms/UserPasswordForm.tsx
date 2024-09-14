import React from 'react'
import TextBox from '../core/TextBox'
import Button from '../core/Button'
import { useAppContext } from '../../contexts/AppContext';

export const UserPasswordForm = () => {
    const {showModal,closeContentModal,showToast} = useAppContext();
  return (
    <div className='w-full p-4 md:p-1 flex flex-col min-h-full items-center '>
              <form
                className='form-container w-full 2xl:w-[720px] sm:w-fit lg:w-[600px] flex flex-col  gap-y-8 bg-white px-10 pt-14 pb-14'
              >
                <div className='flex flex-col gap-y-7 '>
                  <TextBox
                    placeholder='your password'
                    type='email'
                    name='email'
                    label='Podaj obecne hasło'
                    className='w-full rounded-lg'
                  />
                  <TextBox
                    placeholder='your password'
                    type='password'
                    name='password'
                    label='Podaj nowe hasło'
                    className='w-full rounded-lg'
                  />
                  <TextBox
                    placeholder='your password'
                    type='password'
                    name='password'
                    label='Powtórz nowe hasło'
                    className='w-full rounded-lg'
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
