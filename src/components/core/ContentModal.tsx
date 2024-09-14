import { Button, Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { GrStatusGood } from "react-icons/gr";
import { FcSearch } from 'react-icons/fc'
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { MdManageAccounts } from "react-icons/md";
import { MdWarning } from 'react-icons/md';
import { FaExclamationTriangle } from 'react-icons/fa';

const ContentModal =({children,contentModalState, closeModal,type})=> {


  const typeVariantHandler = () =>{
    if(type ==='INFO'){
      return <AiOutlineInfoCircle className='w-7 h-7 ml-2 text-blue-600'/>
    }
    else if(type ==='WARNING'){
      return <MdWarning className='w-7 h-7 text-orange-400'/>
    }
    else if(type ==="DANGER"){
      return <FaExclamationTriangle className='w-7 h-7 text-rose-700/85'/>
    }
    else if(type ==="MANAGE"){
      return <MdManageAccounts className='w-7 h-7 text-gray-700/85'/>
    }
  }
   
  return (
    <>
      
      <Dialog open={contentModalState.isOpen} onClose={closeModal} className="relative z-50 ">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-zinc-900/60 ">
          <DialogPanel className="min-w-[400px] rounded-md space-y-10 border bg-white py-1 px-10" >
           {contentModalState.header && <DialogTitle className="font-bold text-2xl text-slate-600 flex items-center gap-2">{typeVariantHandler()}{contentModalState?.header} </DialogTitle>}
            <Description className={`text-md text-slate-600 break-all   ${children ? "w-fit": "max-w-[450px]" }`}>
{contentModalState?.description&&<div>
{contentModalState?.description}
</div>}
{children &&<div>
{children}
</div>}
            </Description>
 
         { !children &&  <div className="flex gap-8 justify-end px-3">
              <button className='text-slate-500' onClick={closeModal}>Anuluj</button>
              <button className='border px-4 py-1.5 rounded hover:bg-blue-300 transition-all delay-50 shadow-sm bg-blue-400/85 text-white font-semibold' onClick={()=>contentModalState.triggerFn()} >Potwierdź</button>
            </div>}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default ContentModal;