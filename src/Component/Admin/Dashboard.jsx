import React, { useContext } from 'react'
import { Shopcontext } from '../../Context/ShopContext'
import { Admincontext } from './AdminContext';

const Dashboard = () => {

  const { products } = useContext(Shopcontext);
  const { User } = useContext(Admincontext);


  const totalProducts = products.length;
  const totaldogProducts = products.filter(dogitem => dogitem.category === 'Dog').length;
  const totalcatProducts = products.filter(catitem => catitem.category === 'Cat').length;

  const totalUsers = User.length;
  const block =User.filter(blockitem => blockitem.status === false);
  const blockCount = block.length;

  const totalemptyProducts = products.filter(emptyitem => Number(emptyitem.quantity) === 0 ).length;
  const lessProducts =products.filter(lessitem => lessitem.quantity < 20);
  const salePrice = User.reduce((acc,cur) =>acc+cur.order.reduce((acc,order) => acc +order.total, 0),0)
  
  return (
    <div>
      <h1 className='text-center font-bold mt-2  text-rose-400 text-3xl'>Full Details</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-10'>
      <div className="p-4 bg-gray-100 rounded-lg shadow flex flex-col items-center space-y-2 w-64 font-bold">
        <p> Users : {totalUsers} </p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow flex flex-col items-center space-y-2 w-64 font-bold">
         <p> Products : {totalProducts} </p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow flex flex-col items-center space-y-2 w-64 font-bold">
        <p> Dogproducts : {totaldogProducts} </p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow flex flex-col items-center space-y-2 w-64 font-bold">
        <p> Catproducts : {totalcatProducts} </p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow flex flex-col items-center space-y-2 w-64 font-bold">
        <p> Emptyproducts : {totalemptyProducts} </p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow flex flex-col items-center space-y-2 w-64 font-bold">
        <p> Block : {blockCount} </p>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow flex flex-col items-center space-y-2 w-64 font-bold">
        <p> SalePrice : {salePrice} </p>
        </div>
      </div>
      
      <div className='flex flex-col md:flex-row m-6 mt-10'>
        <div className='md:w-1/2 w-full md:mr-4'>
          <h3 className='text-center font-bold mt-2  text-blue-600 text-3xl'>Stock Out</h3>
          <table className='mt-5 w-full border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='px-4 py-2 text-left'>Name</th>
                <th className='px-4 py-2 text-left'>Category</th>
                <th className='px-4 py-2 text-left'>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {lessProducts.map((lessitems) => (
                
                <tr key={lessitems.id}>
                  <td className='px-4 py-2'> {lessitems.title} </td>
                  <td className='px-4 py-2'> {lessitems.category} </td>
                  <td className='px-4 py-2'> {lessitems.quantity} </td>
                </tr>
                
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
