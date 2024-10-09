import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
   <AuthProvider> 
    <RouterProvider router={routes}> </RouterProvider>
   </AuthProvider>
      
  </StrictMode>
);