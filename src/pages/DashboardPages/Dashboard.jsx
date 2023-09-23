import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { RiMoneyEuroCircleLine } from 'react-icons/ri';
import { BumpChart } from '../../components/content';
import { GrView } from 'react-icons/gr'
import { BsFillTrashFill, BsStar, BsListTask } from 'react-icons/bs'
import { events } from '../../data/events';
import dashboardData from '../../data/dashboardData';

const Dashboard = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get('https://accomodationmanagementbackend.onrender.com/tasks')
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => console.error(err));
  }, [data])

  const taskDelete = (id, e) => {
    e.preventDefault();
    Axios.delete(`https://accomodationmanagementbackend.onrender.com/tasks/${id}`)
      .then(res => console.log(('Deleted'), res))
      .catch(err => console.log(err))
    alert("task deleted");
  }

  const arr = data.map((data, index) => {
    return (
      <li className='group relative bg-white p-4 shadow rounded-md border-b border-gray-200 hover:bg-gray-50'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-4'>
            <h2 className='font-medium mb-2 uppercase text-gray-600 text-lg'>{data.title}</h2>
            <button className={`px-3 py-1 rounded-full text-white font-medium text-sm ${data.priority === 'low' ? 'bg-green-500' : data.priority === 'medium' ? 'bg-yellow-500' : 'bg-red-500'}`}>
              {data.priority}
            </button>
          </div>
          <div className='flex space-x-2'>
            <button className='w-6 h-6 text-gray-500 hover:text-gray-800'>
              <Link className='hover:underline' to={`/task/${data._id}`}>
                <GrView />
              </Link>
            </button>
            <button onClick={(e) => taskDelete(data._id, e)} className='w-6 h-6 text-gray-500 hover:text-gray-800'>
              <BsFillTrashFill />
            </button>
          </div>
        </div>
        <div className='py-2'>
          <p className='text-sm text-gray-500'>{data.body}</p>
        </div>
        <div className='flex items-center justify-between py-2'>
          <h5 className='text-gray-500 font-medium text-sm mb-2 uppercase'>Assigned to</h5>
          <Link className='text-sm font-semibold text-lime-700 hover:underline'>
            {data.assigned}
          </Link>
        </div>
      </li>
    )
  })

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white h-auto rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
          <div className='flex justify-between items-center'>
            <div className='text-6xl text-gray-900'><BsListTask /></div>
            <div>
              <h3 className='font-medium mb-2 uppercase text-gray-600 text-2xl'>TASKS</h3>
              {data.length < 5 ? (
                <p className='text-green-600 text-xl'>{data.length}</p>
              ) : data.length >= 5 && data.length <= 8 ? (
                <p className='text-yellow-600 text-xl'>{data.length}</p>
              ) : (
                <p className='text-red-600 text-xl'>{data.length}</p>
              )}      </div>
          </div>
        </div>
        <div className='bg-white h-auto rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
          <div className='flex justify-between items-center'>
            <div className='text-6xl text-gray-900'><RiMoneyEuroCircleLine /></div>
            <div>
              <h3 className='font-medium mb-2 uppercase text-gray-600 text-2xl'>BALANCE</h3>
              <p className={dashboardData.balance < 0 ? 'text-red-500 text-xl' : 'text-lime-700 text-xl'}>{dashboardData.balance}</p>
            </div>
          </div>
        </div>
        <div className='bg-white h-auto rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
          <div className='flex justify-between items-center'>
            <div className='text-6xl text-gray-900'><BsStar /></div>
            <div>
              <h3 className='font-medium mb-2 uppercase text-gray-600 text-2xl'>RATING</h3>
              <p className={`text-xl ${dashboardData.rating >= 4 ? 'text-green-500' : dashboardData.rating >= 2 ? 'text-yellow-500' : 'text-red-500'}`}>{dashboardData.rating} / 5</p>
            </div>
          </div>
        </div>
      </div>

      <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl grid h-screen gap-4'>

        <div className='border text-center rounded-xl py-12 px-8'>
          <h3 className='text-gray-500 font-medium text-sm mb-2 uppercase'>Money Overview</h3>
          <div><BumpChart /></div>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='border text-center rounded-xl p-6'>
            <h3 className='text-gray-500 font-medium text-sm mb-2 uppercase'>Upcoming events</h3>
            <div className='grid gap-4'>
              {events.map(item => (
                <Link to='/calendar' className='block bg-green-600 hover:bg-green-500 text-white rounded-lg p-4' key={item.title}>
                  <p className='text-lg font-medium'>{item.title}</p>
                </Link>
              ))}

            </div>
          </div>

          <div className='border text-center rounded-xl py-12 px-8'>
            <h3 className='text-gray-500 font-medium text-sm mb-2 uppercase'><span>{arr.length}</span> Task under way!</h3>
            <br />
            <ul className='space-y-5'>{arr}</ul>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Dashboard