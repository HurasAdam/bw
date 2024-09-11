import React from 'react'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'
import { MdError } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
const ToastVariant = ({t,message,variant="INFO"}) => {



    const getIcon = () => {
        switch (variant) {
          case 'SUCCESS':
            return <IoCheckmarkCircle className="w-5 h-5 text-green-500" />;
          case 'ERROR':
            return <MdError className='w-5 h-5 text-rose-600' />;
            case 'INFO':
                return <IoInformationCircleSharp className='w-5 h-5 text-indigo-400'/>
          default:
            return null;
        }
      };
    
      const getTitle = () => {
        switch (variant) {
          case 'SUCCESS':
            return 'Sukces';
          case 'ERROR':
            return 'Błąd';
          default:
            return 'INFO';
        }
      }


  return (
    <div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5 flex ">
   {getIcon()}
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm font-medium text-gray-900">
          {getTitle()}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            {message}
          </p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
       <RxCross2 className="w-4 h-4"/>
      </button>
    </div>
  </div>
  )
}

export default ToastVariant