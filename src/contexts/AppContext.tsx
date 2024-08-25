import { useContext, useEffect, useState } from "react";
import Toast from "../components/core/Toast";
import { useQuery } from "@tanstack/react-query";
import { authApi } from "../services/authApi";
import React from "react";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext(undefined);



export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [toast, setToast] = useState(undefined);
  const [user, setUser] = useState(null);

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


  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => {
          setToast(toastMessage);
        },
        
        isLoggedIn:status,
        user,
        isLoading,
        setUser
      
      }}
    >
      {toast && (
        <Toast
        message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};