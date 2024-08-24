import React from 'react';
import { Outlet } from 'react-router-dom';
import CONSTANTS from '../constants';

const GuestLayout:React.FC = () => {
  return (
    <section className='nin-h-screen flex w-full'>
      <div className='flex-1 my-auto hidden lg:flex flex-col items-center mt-20'>
        <h1 className=' text-6xl text-indigo-800 font-bold'>Baza wiedzy</h1>
<img className='w-auto max-h-[700px]' src={CONSTANTS.IMAGES.landingImage} alt="" />
</div>
          <div className='flex-1 md:w-2/5 h-screen '>
    <Outlet/>
    </div>


    </section>
  )
}

export default GuestLayout