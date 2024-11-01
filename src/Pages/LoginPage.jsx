import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MdOutlineMail } from "react-icons/md";
import { RxLockClosed } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate() 
  const [user , setUser] = useState()


  const validation = Yup.object({
    email :Yup.string().email('Invalid email').required('Required'),
    password : Yup.string().min(8, 'Password must be at least 8 characters').required('Required')})

    const onSubmits = async (values) => {
      
      try {
        const response = await axios.get(`http://localhost:3001/user`);
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }

      
      const foundUser = user.find(item => item.email === values.email && item.password === values.password);
    
      if (foundUser) {
        localStorage.setItem('id', foundUser.id);  
        localStorage.setItem('name', foundUser.username);  
        alert('Login successful');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } 
      else {
        alert('Invalid email or password');
      }
    };

   
    
  
    
  return (
    <div className="max-w-md mx-auto mt-10">
      
      <h1 className="text-2xl font-bold mb-5 text-center">LogIn</h1>

    <Formik 

    initialValues = {{email : '' , password : ''}}
    validationSchema={validation}
    onSubmit={onSubmits}
    >
      
         <Form className='space-y-4'>

        <div className='flex items-center border border-gray-300 p-3 rounded bg-gray-100'>
        <MdOutlineMail className='text-gray-500 text-xl'/>
        <Field type="email" placeholder='Email' name='email' className='border-none outline-none flex-1 pl-2 bg-transparent'/>
        </div>
        <ErrorMessage name='email' component='div' className='text-red-500' text-sm/>

        <div className="flex items-center border border-gray-300 p-3 rounded bg-gray-100">
        <RxLockClosed className="text-gray-500 text-xl"/>
        <Field type="password" placeholder='Password' name='password' className="border-none outline-none flex-1 pl-2 bg-transparent"/>
        </div>
        <ErrorMessage name='password' component='div' className='text-red-500' text-sm/>

        <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-600 text-sm">
              Don't have an account?
              <button type="button" onClick={() => navigate('/registration')} className="text-blue-500 hover:text-blue-700 font-bold ml-1" >
                Sign Up
              </button>
            </p>
          </div>
        </Form>
    </Formik>
    </div>
  )
};

export default LoginPage
