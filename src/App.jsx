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
import Footer from './Component/Footer'
import AdminNavbar from './Component/Admin/AdminNavbar'
import UserPage from './Component/Admin/UserPage'
import AdminProductPage from './Component/Admin/AdminProductPage'
import Dashboard from './Component/Admin/Dashboard'

function App() {
  return (
    <>
        <Toaster/>
        
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='shop' Component={Shop}/>
          <Route path='category' Component={Category}/>
          <Route path='cart' Component={Cart}/>
          <Route path='login' Component={LoginPage} />
          <Route path='registration' Component={RegistrationPage}/>
          <Route path='paymentpage' Component={PaymentSection}/>
          <Route path='order' Component={Order}/>
          
          <Route path='admin' Component={AdminNavbar}>
            <Route path='products' Component={AdminProductPage}/>
            <Route path='userpage' Component={UserPage} />
            <Route path='dashboard' Component={Dashboard}/>
          </Route>
        </Routes>
        {/* <Footer/> */}
        
    </>
  )
}

export default App
