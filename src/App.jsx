import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Category from './Pages/Category'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'


function App() {
  

  return (
    <>
        {/* <LoginSignup/> */}
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='shop' Component={Shop}/>
          <Route path='category' Component={Category}/>
          <Route path='cart' Component={Cart}/>
          <Route path='loginsignup' Component={LoginSignup} />
         
          
        </Routes>
        
    </>
  )
}

export default App
