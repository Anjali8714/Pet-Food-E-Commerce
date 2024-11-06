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
import HomePage from './Component/Admin/HomePage'
import Footer from './Component/Footer'

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
          <Route path='admin' Component={HomePage}/>
          
        </Routes>
        {/* <Footer/> */}
        
    </>
  )
}

export default App
