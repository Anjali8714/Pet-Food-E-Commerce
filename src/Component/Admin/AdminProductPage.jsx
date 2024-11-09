import React, { useContext, useState } from 'react';
import { Shopcontext } from '../../Context/ShopContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { MdClose } from 'react-icons/md';
import * as Yup from "yup";
import { Admincontext } from './AdminContext';

const AdminProductPage = () => {
  const { products } = useContext(Shopcontext);
  const { editFormData, DeleteProduct, addingData} = useContext(Admincontext);
  const [edit, setEdit] = useState(false);
  const [Filter, setFilter] = useState('All');
  const [addProduct , setAddProduct] = useState(null)
  
  const initialValues = {
    
    title: "",
    price: "",
    quantity: "",
    category: "",
    description: "",
    url: "",
  };
  // useEffect(() => {
  //   console.log("page reload");
  // }, [products]);
  

  const validation = Yup.object({
    
    title: Yup.string().required("Required"),
    price: Yup.string().required("Required"),
    quantity: Yup.number().required("Required").positive().integer(),
    category: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    url: Yup.string().url("Invalid URL format").required("Required"),
  });

  const handlesubmit = (values, {resetForm}) => {
    // console.log(values);
    addingData(values)
    resetForm()
  }

  const onHandleEdit = (product) => {
    setEdit(product);
  };

  const editHandleSubmit = (values) => {
    console.log(values);
    editFormData(values);
    setEdit(null);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const filteredData = Filter === 'All' ? products : products.filter(item => item.category.toLowerCase() === Filter.toLowerCase())

  return (
    <div>
      <div className="flex justify-between items-center m-2">
  <select 
    id="category" 
    value={Filter} 
    onChange={handleFilterChange} 
    className="p-2 border border-gray-300 rounded mr-4"
  >
    <option value="All">All</option>
    <option value="Dog">Dog</option>
    <option value="Cat">Cat</option>
  </select>

  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-4"
  onClick={()=>setAddProduct(true)}>
    Add Product
  </button>
</div>

<div className="w-11/12 mx-auto my-4 overflow-x-auto">
      <table className="w-full text-sm text-gray-900 border-collapse border border-gray-300">
        <thead className="text-xs text-white bg-gray-700">
          <tr>
            <th className='p-4 text-center'>PRODUCT NAME</th>
            <th className='p-4 text-center'>PRICE</th>
            <th className='p-4 text-center'>QUANTITY</th>
            <th className='p-4 text-center'>CATEGORY</th>
            <th className='p-4 text-center'>DESCRIPTION</th>
            <th className='p-4 text-center'>IMAGE</th>
            <th className='p-4 text-center'>EDIT/DELETE</th>
          </tr>
        </thead>
        
        <tbody>
        {filteredData.map((product, index) => (
  <tr key={product.id || index} className="border-b text-lg hover:bg-gray-100">
              <td className='p-4 text-center text-blue-700'>{product.title}</td>
              <td className='p-4 text-center text-blue-700'>{product.price}</td>
              <td className='p-4 text-center text-blue-700'>{product.quantity}</td>
              <td className='p-4 text-center text-blue-700'>{product.category}</td>
              <td className='p-4 text-center text-blue-700'>{product.description}</td>
              <td className='p-4 text-center'>
                <img src={product.url} alt={product.title} className='h-24 w-24 object-cover' />
              </td>
              <td className="p-4 text-center flex flex-col items-center space-y-2">
                <button onClick={() => onHandleEdit(product)} className="w-20 px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Edit
                </button>
                <button onClick={() => DeleteProduct(product.id)} className="w-20 px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {edit && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 relative max-w-lg w-full h-3/4 overflow-y-auto">
            <MdClose
              className="absolute top-2 right-2 text-gray-600 cursor-pointer"
              onClick={() => setEdit(false)}
            />
            <Formik
              initialValues={{
                id: edit.id,
                title: edit.title,
                price: edit.price,
                quantity: edit.quantity,
                description: edit.description,
                category: edit.category,
                url: edit.url
              }}
              validationSchema={validation}
              onSubmit={editHandleSubmit}
            >
              <Form>
                <div className='p-2'>
                  <label htmlFor="title" className='text-gray-700 w-full'>Name:</label>
                  <Field name='title' type='text' placeholder='Enter the name' className='w-full rounded-md border-gray-300 p-2' />
                  <ErrorMessage name='title' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='p-2'>
                  <label htmlFor="price" className='text-gray-700 w-full'>Price:</label>
                  <Field name='price' type='text' placeholder='Enter the price' className='w-full rounded-md border-gray-300 p-2' />
                  <ErrorMessage name='price' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='p-2'>
                  <label htmlFor="quantity" className='text-gray-700 w-full'>Quantity:</label>
                  <Field name='quantity' type='text' placeholder='Enter the quantity' className='w-full rounded-md border-gray-300 p-2' />
                  <ErrorMessage name='quantity' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='p-2'>
                  <label htmlFor="category" className='text-gray-700 w-full'>Category:</label>
                  <Field name='category' type='text' placeholder='Enter the category' className='w-full rounded-md border-gray-300 p-2' />
                  <ErrorMessage name='category' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='p-2'>
                  <label htmlFor="description" className='text-gray-700 w-full'>Description:</label>
                  <Field name='description' type='text' placeholder='Enter the description' className='w-full rounded-md border-gray-300 p-2' />
                  <ErrorMessage name='description' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='p-2'>
                  <label htmlFor="url" className='text-gray-700 w-full'>Image URL:</label>
                  <Field name='url' type='text' placeholder='Enter the image URL' className='w-full rounded-md border-gray-300 p-2' />
                  <ErrorMessage name='url' component='div' className='text-red-500 text-sm' />
                </div>
                
                <button type='submit' className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600">
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      )}

      {addProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 relative max-w-lg w-full h-3/4 overflow-y-auto">
          <MdClose
              className="absolute top-2 right-2 text-gray-600 cursor-pointer"
              onClick={() => setAddProduct(false)}
            />
            <Formik
              initialValues = {initialValues}
              validationSchema = {validation}
              onSubmit ={handlesubmit}
              >
                <Form>
                
                <div className='p-2'>
                  <label htmlFor="title" className='text-gray-700 w-full'>Name:</label>
                  <Field name='title' type='text' placeholder='Enter the name' className='w-full rounded-md border-gray-300 p-2' />
                  <ErrorMessage name='title' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='p-2'>
                  <label htmlFor="price" className='text-gray-700 w-full'>Price:</label>
                  <Field name='price' type='text' placeholder='Enter the price' className='w-full rounded-md border-gray-300 p-2' />
                  <ErrorMessage name='price' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='p-2'>
                  <label htmlFor="quantity" className='text-gray-700 w-full'>Quantity:</label>
                  <Field name='quantity' type='text' placeholder='Enter the quantity' className='w-full rounded-md border-gray-300 p-2' />
                  <ErrorMessage name='quantity' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='p-2'>
                  <label htmlFor="category" className='text-gray-700 w-full'>Category:</label>
                  <Field name='category' type='text' placeholder='Enter the category' className='w-full rounded-md border-gray-300 p-2' />
                  <ErrorMessage name='category' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='p-2'>
                  <label htmlFor="description" className='text-gray-700 w-full'>Description:</label>
                  <Field name='description' type='text' placeholder='Enter the description' className='w-full rounded-md border-gray-300 p-2' />
                  <ErrorMessage name='description' component='div' className='text-red-500 text-sm' />
                </div>

                <div className='p-2'>
                  <label htmlFor="url" className='text-gray-700 w-full'>Image URL:</label>
                  <Field name='url' type='text' placeholder='Enter the image URL' className='w-full rounded-md border-gray-300 p-2' />
                  <ErrorMessage name='url' component='div' className='text-red-500 text-sm' />
                </div>
                
                <button type='submit' className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600">
                  Submit
                </button> 
                </Form>
            </Formik>
          </div>
        </div>
      )}

    </div>
    </div>
  );
};

export default AdminProductPage;
