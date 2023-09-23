import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Axios from 'axios';
import { Header } from '../../../components/content';
import { GrView } from 'react-icons/gr'
import { MdPersonRemoveAlt1 } from 'react-icons/md'
import { RxDividerVertical } from 'react-icons/rx'
import { utils, writeFile } from 'xlsx';


const Employees = () => {
  const [data, setData] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);


  useEffect(() => {
    Axios.get('https://accomodationmanagementbackend.onrender.com/employees')
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => console.error(err));
  }, [data])

  const employeeDelete = (id, e) => {
    e.preventDefault();
    Axios.delete(`https://accomodationmanagementbackend.onrender.com/employees/${id}`)
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
    utils.book_append_sheet(workbook, worksheet, 'Employees');
    writeFile(workbook, 'employees.xlsx');
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
          {data.firstname} {data.lastname}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {data.email}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {data.address}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {data.employeeid}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <div className="flex items-center justify-center space-x-2">
            <Link
              to={`/employee/${data._id}`}
              className="bg-green-200 text-green-800 hover:bg-green-300 px-3 py-2 rounded-lg font-medium text-sm"
            >
              View
            </Link>
            <button
              onClick={(e) => employeeDelete(data._id, e)}
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
          <div>{data.firstname} {data.lastname}</div>
          <div className='text-gray-500 text-sm'>{data.email}</div>
        </div>

        <div className='text-sm text-gray-700'>{data.address}</div>

        <div>
          <Link className='text-lime-700 font-semibold hover:underline'>
            Payroll
          </Link>
        </div>

        <div className='flex items-center justify-between'>
          <span className='p-2 text-md font-medium tracking-wider bg-green-200 text-green-800 hover:bg-green-300 rounded-lg bg-opacity-50 flex justify-around'>
            <Link className='hover:underline' to={`/employee/${data._id}`}>
              <GrView />
            </Link>
            <span className='text-gray-500'>
              <RxDividerVertical />
            </span>
            <button onClick={(e) => employeeDelete(data._id, e)} className='hover:underline'>
              <MdPersonRemoveAlt1 />
            </button>
          </span>
        </div>
      </div>

    )
  })

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
      {showConfirmation && (
        <div className="bg-red-500 text-white text-center p-3 rounded-lg">
          Employee Deleted successfully.
        </div>
      )}
      <div className='flex justify-between items-center mb-6'>
        <Header category="People" title="Employees" />
        <div>
        <Link to="/new-employee">
          <button className='bg-lime-700 hover:bg-lime-600 text-white font-medium py-2 px-4 mx-2 rounded-md'>Add Employee</button>
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
              <th className='w-1/5 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>Name</th>
              <th className='w-1/5 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>Email</th>
              <th className='w-1/5 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>Address</th>
              <th className='w-1/5 p-3 text-left text-xs font-semibold tracking-wider text-gray-500 uppercase'>EID</th>
              <th className='w-1/5 p-3 text-center text-xs font-semibold tracking-wider text-gray-500 uppercase'>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {arr}
          </tbody>
        </table>
      </div>


      {/*Collapse on smaller screens */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden'>
        {smallArr}
      </div>
    </div>
  )
}

export default Employees