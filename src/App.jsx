import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Category from './Pages/Category'
import Cart from './Pages/Cart'
import LoginPage from './Pages/LoginPage'
import RegistrationPage from './Pages/RegistrationPage'
import PaymentSection from './Pages/PaymentSection'
import { Toaster } from 'react-hot-toast'
import Footer from './Component/Footer'
import Order from './Pages/Order'


function App() {
  

  return (
    <>
        <Toaster/>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='shop' Component={Shop}/>
          <Route path='category' Component={Category}/>
          <Route path='cart' Component={Cart}/>
          <Route path='login' Component={LoginPage} />
          <Route path='registration' Component={RegistrationPage}/>
          <Route path='paymentpage' Component={PaymentSection}/>
          <Route path='order' Component={Order}/>
        
          
        </Routes>
        {/* <Footer/> */}
        
    </>
  )
}

export default App
