import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Component/User/Home'
import Shop from './Component/User/Shop'
import Category from './Component/User/Category'
import Cart from './Component/User/Cart'
import LoginPage from './Pages/LoginPage'
import RegistrationPage from './Pages/RegistrationPage'
import PaymentSection from './Component/User/PaymentSection'
import { Toaster } from 'react-hot-toast'
import Order from './Component/User/Order'
import AdminNavbar from './Component/Admin/AdminNavbar'
import UserPage from './Component/Admin/UserPage'
import AdminProductPage from './Component/Admin/AdminProductPage'
import Dashboard from './Component/Admin/Dashboard'
import MainLayout from './Component/User/MainLayout'
import ProtectedAdmin from './Component/Admin/ProtectedAdmin'

function App() {
  return (
    <>
        <Toaster/>
        
        <Routes>
          <Route Component={MainLayout}>
          <Route path='/' Component={Home}/>
          <Route path='shop' Component={Shop}/>
          <Route path='category' Component={Category}/>
          <Route path='cart' Component={Cart}/>
          <Route path='paymentpage' Component={PaymentSection}/>
          <Route path='order' Component={Order}/>
          </Route>

          <Route path='login' Component={LoginPage} />
          <Route path='registration' Component={RegistrationPage}/>
          
          <Route  element={<ProtectedAdmin><AdminNavbar /></ProtectedAdmin>} >
            <Route path='admin' Component={AdminProductPage}/>
            <Route path='userpage' Component={UserPage} />
            <Route path='dashboard' Component={Dashboard}/>
          </Route>

          
        </Routes>
        
        
    </>
  )
}

export default App
