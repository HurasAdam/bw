import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'


const tabs =[
    {label:"Pomoc techniczna",link:"helpdesk"},
    {label:"Sprzedaż i szkolenia",link:"sales "},
    {label:"Administracja",link:"administration"},
    {label:"Dział umawiania spotkań ",link:"appointment "},
  
]

const Deparments:React.FC = () => {
    const location = useLocation()

    console.log(location)
  return (
    <div className='h-[calc(100vh-6rem)] bg-white'>
   {/*  */}



<ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
{tabs.map(({label,link})=>{
    return(
        <li className="w-full focus-within:z-10">
        <NavLink to={link}  className="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">{label}</NavLink>
    </li>
    )
})}

</ul>

{/*  */}
        <section className="py-10 bg-white sm:py-16 lg:py-24 ">
   
    <Outlet/>
</section>





    </div>
  )
}

export default Deparments