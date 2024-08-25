import React, { useEffect } from 'react'


interface IToastProps{
  message:string;
  type:"SUCCESS" | "ERROR",
  onClose:()=>void;
}

const Toast:React.FC<IToastProps> = ({message,type,onClose}) => {

// useEffect(()=>{
// const timer= setTimeout(()=>{
// onClose();
// },5000);

// return ()=>{
//   clearTimeout(timer);
// }
// },[])


    const styles =
    type === "SUCCESS"
      ? "fixed top-4 right-4 z-50 p-3.5 rounded-md bg-green-600 text-white max-w-md"
      : "fixed top-4 right-4 z-50 p-3.5 rounded-md bg-red-600 text-white max-w-md";

  return (
    <div className={styles}>

<div className='flex flex-col relative'>
<div className='absolute top-[-15px] right-[-14px]'>
<button onClick={onClose} className=' flex justify-center items-center  w-4 h-4'>X</button>
</div>
<div className='flex justify-center items-center '>
<span className='text-lg font-semibold'>{message}</span>

</div>
</div>

    </div>
  )
}

export default Toast