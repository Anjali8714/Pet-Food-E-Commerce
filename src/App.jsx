import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Category from './Pages/Category'
import Cart from './Pages/Cart'
import LoginPage from './Pages/LoginPage'
import RegistrationPage from './Pages/RegistrationPage'


function App() {
  

  return (
    <>
        
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='shop' Component={Shop}/>
          <Route path='category' Component={Category}/>
          <Route path='cart' Component={Cart}/>
          <Route path='login' Component={LoginPage} />
          <Route path='registration' Component={RegistrationPage}/>
         
          
        </Routes>
        
    </>
  )
}

export default App
