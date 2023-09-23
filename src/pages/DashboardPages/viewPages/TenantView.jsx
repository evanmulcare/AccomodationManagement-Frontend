import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import {BsPersonCircle} from 'react-icons/bs'
import { BiExit } from 'react-icons/bi'

const TenantView = () => {
  const [data, setData] = useState([]);
  const [payData, setPayData] = useState([]);
  const { id } = useParams();

    useEffect(() => {
      Axios.get(`https://accomodationmanagementbackend.onrender.com/tenants/${id}`)
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => console.error(err));
     }, [data]) 


  useEffect(() => {
    Axios.get('https://accomodationmanagementbackend.onrender.com/payments')
    .then(res => {
      console.log(res)
      setPayData(res.data)
    })
    .catch(err => console.error(err));
   }, [payData]) 

  const paymentDelete = ( id, e) => {
    e.preventDefault();
    Axios.delete(`https://accomodationmanagementbackend.onrender.com/payments/${id}`)
      .then(res => console.log(('Deleted') , res))
      .catch(err => console.log(err))
      alert("payment deleted");
   }

  const arr = payData.map((payData, index) => {
    if (payData.caravanid === data.caravanid  ) {

          return (
            <tr className="bg-white shadow-md">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {payData.firstname} {payData.lastname}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {payData.paymentType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {payData.amount}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {payData.caravanid}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{payData.createdAt}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={(e) => paymentDelete(data._id, e)}
                    className="bg-red-200 text-red-800 hover:bg-red-300 px-3 py-2 rounded-lg font-medium text-sm"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr> 
    );
  } 
});
      

  
  
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <div className='border text-center rounded-xl py-12 px-8'>
      <div className='text-left'>
      <div className='flex justify-start items-center flex-grow'>
  <BsPersonCircle className='text-8xl text-gray-500' />
  <div className='ml-4'>
    <h3 className='font-semibold text-2xl text-gray-600'>{data.firstname} {data.lastname}</h3>
    <h5 className='font-semibold text-lime-600'>Tenant</h5>
  </div>
</div>
<Link to='/tenants'>
  <BiExit className='ml-auto text-4xl mt-5 mb-5 cursor-pointer text-gray-600 hover:text-gray-200' />
</Link>
  
        <div className='p-5 mt-10'>
          <h3 className='font-bold text-gray-400 text-lg mb-4'>Contact Information</h3>
          <hr className='my-4' />
          <div className='text-gray-700'>
            <div className='flex flex-col md:flex-row'>
              <div className='md:w-1/2'>
                <h4 className='font-semibold mb-2'>Email:</h4>
                <p className='mb-4'>{data.email}</p>
              </div>
              <div className='md:w-1/2'>
                <h4 className='font-semibold mb-2'>Address:</h4>
                <p className='mb-4'>{data.address}</p>
              </div>
            </div>
            <div className='flex flex-col md:flex-row'>
              <div className='md:w-1/2'>
                <h4 className='font-semibold mb-2'>Caravan ID:</h4>
                <p>{data.caravanid}</p>
              </div>
            </div>
          </div>
        </div>
  
        <div className='p-5 mt-10'>
          <h3 className='font-bold text-gray-400 text-lg mb-4'>Payments</h3>
          <hr className='my-4' />
          <div className='text-gray-700'>
            <div className='overflow-auto rounded-lg shadow'>
              <table className='w-full'>
                <thead className='bg-gray-50 border-b-2 border-gray-200'>
                  <tr>
                    <th className='w-1/6 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>Name</th>
                    <th className='w-1/6 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>Payment Type</th>
                    <th className='w-1/6 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>Amount</th>
                    <th className='w-1/6 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>CID</th>
                    <th className='w-1/6 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>Created</th>
                    <th className='w-1/6 p-3 text-center text-xs font-semibold tracking-wider text-gray-500 uppercase'>Actions</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {arr}
                </tbody>
              </table>
            </div>
          </div>
        </div>
  
      </div>
      </div>
</div>
  )
}

export default TenantView