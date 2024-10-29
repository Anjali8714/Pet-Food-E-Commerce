import React from 'react'
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { RxLockClosed } from "react-icons/rx";
const LoginSignup = () => {
  return (
    <div className='flex flex-col m-auto bg-white max-w-md  p-6 border border-gray-300 rounded-lg'>
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='input'>
        <div className='input'>
        <MdPersonOutline />
        <input type="text" />
        </div>
        <div className='input'>
        <MdOutlineMail />
        <input type="email" />
        </div>
        <div className='border-black'>
        <RxLockClosed />
        <input type="password" />
        </div>
      </div>
      <div className="forgotpassword">Forgot Password? <span>Click Here!</span></div>
      <div className='submit-container'>
        <div className='submit'>Sign Up</div>
        <div className='submit'>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup
{/* 
    
     */}