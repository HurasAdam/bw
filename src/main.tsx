import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './App.tsx';
import './index.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { AppContextProvider } from './contexts/AppContext.tsx';
import App from './App.tsx';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <QueryClientProvider client={queryClient}>
      
         <BrowserRouter>
         <AppContextProvider>
          <App/>
         </AppContextProvider>
         </BrowserRouter>
      
    </QueryClientProvider>
  </StrictMode>,
)
