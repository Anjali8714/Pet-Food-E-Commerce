import React, { useContext } from 'react'
// import { Admincontext } from './AdminContext'
import { useNavigate } from 'react-router-dom'
import { Shopcontext } from '../../Context/ShopContext'
const ProtectedAdmin = ({children}) => {
     const navigate = useNavigate()
    // const {logged} = useContext(Admincontext)
    const {isLoggedIn} =useContext(Shopcontext)
  return (
    isLoggedIn ? children : navigate('/login')
  )
}

export default ProtectedAdmin
