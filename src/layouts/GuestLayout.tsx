import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import CONSTANTS from '../constants';
import { useAppContext } from '../contexts/AppContext';

const GuestLayout:React.FC = () => {
const{user,isLoading}=useAppContext();

// if(isLoading){
//   return (    <div className='text-6xl font-bold text-orange-600'>LOADING</div>)
// }

 if(user){
  return <Navigate to="/"/>
}
  return (
    <section className='nin-h-screen flex w-full bg-blue-100'>
      <div className='flex-1 my-auto hidden lg:flex flex-col items-center mt-20'>
        <h1 className=' text-6xl text-indigo-800 font-bold'>Baza wiedzy</h1>
<img className='w-auto max-h-[700px]' src={CONSTANTS.IMAGES.landingImage} alt="" />
</div>
          <div className='flex-1 md:w-2/5 h-screen bg-white '>
       
    <Outlet/>
    </div>


    </section>
  )
}

export default GuestLayout