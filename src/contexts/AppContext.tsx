import { useContext, useEffect, useState } from "react";
import Toast from "../components/core/Toast";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "../services/authApi";
import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import Modal from "../components/core/Modal";
import ContentModal from "../components/core/ContentModal";

const AppContext = React.createContext(undefined);



export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [toast, setToast] = useState(undefined);
  const [user, setUser] = useState(null);
  const [verifyModalState, setVerifyModalState] = useState({
    isOpen:false,
    triggerFn:()=>{},
    header:"",
    description:"",
    type:"",
   
  })
  const [contentModalState, setContentModalState] = useState({
    isOpen:false,
    triggerFn:()=>{},
    childrenComponent:""
  })

  const { data, status, error,isLoading } = useQuery({
    queryKey: ["validateToken"], // Klucz zapytania
    queryFn: () => authApi.validateToken(), // Funkcja zapytania
    onSuccess: (data) => {
      
      setUser(data);

    },
    onError: (error) => {
      console.error('Error validating token:', error);
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
   
  });





  const showModal = ({header, description, triggerFn,type}) => {
    setVerifyModalState({
      isOpen: true,
      header,
      description,
      triggerFn,
      type,
     
    });
  };

  const showContentModal = ({triggerFn,childrenComponent}) =>{
setContentModalState({
  isOpen:true,
  triggerFn,
  childrenComponent
})
  }


  const closeModal = () => {
    setVerifyModalState({
      isOpen: false,
      triggerFn: () => {},
      header: "",
      description: "",
      
    });
  };


  const closeContentModal = () =>{
    setContentModalState({
      isOpen:false,
      childrenComponent:""
      
    })
  }



  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
        
        isLoggedIn:status,
        user,
        isLoading,
        setUser,
        showModal,
        closeModal,
        showContentModal,
        closeContentModal
      
      }}
    >
      {toast && (
        <Toast
        message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
<Toaster 
  position="bottom-right"
  reverseOrder={false}
/>
{verifyModalState?.isOpen && (
        <Modal
          header={verifyModalState.header}
          description={verifyModalState.description}
          verifyModalState={verifyModalState}
          closeModal={closeModal}
          type={verifyModalState.type}
       
        />
      )}

<ContentModal
contentModalState={contentModalState}
children={contentModalState.childrenComponent}
closeModal={closeContentModal}
/>



      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};