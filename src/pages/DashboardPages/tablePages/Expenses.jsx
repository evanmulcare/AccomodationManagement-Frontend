import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { Header } from '../../../components/content';
import { utils, writeFile } from 'xlsx';



const Expenses = () => {
  const [data, setData] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);


  useEffect(() => {
    Axios.get('https://accomodationmanagementbackend.onrender.com/expenses')
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => console.error(err));
  }, [data])

  const expenseDelete = (id, e) => {
    e.preventDefault();
    Axios.delete(`https://accomodationmanagementbackend.onrender.com/expenses/${id}`)
      .then(function (response) {
        console.log(response);
        setShowConfirmation(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const exportToExcel = () => {
    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Expenses');
    writeFile(workbook, 'expenses.xlsx');
  };

  useEffect(() => {
    if (showConfirmation) {
      setTimeout(() => {
        setShowConfirmation(false);
      }, 2000);
    }
  }, [showConfirmation]);

  const arr = data.map(data => {

    return (
      <tr className="bg-white shadow-md">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {data.type}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {data.vendor}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {data.paymentType}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {data.amount}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{data.createdAt}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div className="flex items-center justify-center space-x-2">
            <button
              onClick={(e) => expenseDelete(data._id, e)}
              className="bg-red-200 text-red-800 hover:bg-red-300 px-3 py-2 rounded-lg font-medium text-sm"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    )
  });

  const smallArr = data.map(data => {


    return (
      <div className='bg-white rounded-lg shadow-md p-4 space-y-4'>
        <div className='flex items-center space-x-2 text-lg font-semibold'>
          <div>{data.type}</div>
          <div className='text-gray-500 text-sm'>{data.vendor}</div>
        </div>

        <div className='text-sm text-gray-700'>Payment Amount: {data.amount}</div>

        <div>
          <Link className='text-lime-700 font-semibold hover:underline'>
            {data.paymentType}
          </Link>
        </div>

        <div className='flex items-center justify-end'>
          <button
            onClick={(e) => expenseDelete(data._id, e)}
            className="bg-red-200 text-red-800 hover:bg-red-300 px-4 py-2 rounded-lg font-medium text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    )
  })

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
      {showConfirmation && (
        <div className="bg-red-500 text-white text-center p-3 rounded-lg">
          expense Deleted successfully.
        </div>
      )}
      <div className='flex justify-between items-center mb-6'>
        <Header category="Money" title="Expenses" />
        <div>
        <Link to="/new-expense">
          <button className='bg-lime-700 hover:bg-lime-600 text-white font-medium py-2 px-4 mx-2 rounded-md'>Add Expense</button>
        </Link>
        <button 
              onClick={exportToExcel}
              className='bg-lime-700 hover:bg-lime-600 text-white font-sm py-2 px-4 mx-2 rounded-md'
            >Export to Excel
        </button>
        </div>
      </div>

      <div className='overflow-auto rounded-lg shadow hidden md:block'>
        <table className='w-full'>

          <thead className='bg-gray-50 border-b-2 border-gray-200'>
            <tr>
              <th className='w-1/6 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>Type</th>
              <th className='w-1/6 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>Vendor</th>
              <th className='w-1/6 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>Payment Type</th>
              <th className='w-1/6 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>Amount</th>
              <th className='w-1/6 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>Created</th>
              <th className='w-1/6 p-3 text-center text-xs font-semibold tracking-wider text-gray-500 uppercase'>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {arr}
          </tbody>
        </table>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden'>
        {smallArr}
      </div>


    </div>
  )
}

export default Expenses