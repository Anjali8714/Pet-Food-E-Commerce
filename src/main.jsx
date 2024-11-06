import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './Context/ShopContext.jsx'
import AdminContext from './Component/Admin/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <StrictMode>
    <ShopContextProvider>
      <AdminContext>
      <App />
      </AdminContext>
    </ShopContextProvider>
  </StrictMode>
 </BrowserRouter>
)
