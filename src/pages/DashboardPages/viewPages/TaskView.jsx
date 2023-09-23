import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import {FaTasks} from 'react-icons/fa'
import { BiExit } from 'react-icons/bi'

const TaskView = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

    useEffect(() => {
      Axios.get(`https://accomodationmanagementbackend.onrender.com/tasks/${id}`)
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => console.error(err));
     }, [data]) 
  
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <div className='border text-center rounded-xl py-12 px-8'>
    <div className='flex justify-between items-center'>
    <div className='flex items-center'>
      <FaTasks className='text-6xl md:text-8xl text-gray-500 mr-4 md:mr-8' />
      <div>
        <h3 className='font-medium mb-2 uppercase text-gray-600 text-2xl'>{data.title}</h3>
        <h5 className={`ont-medium text-sm mb-2 uppercase ${data.priority === 'high' ? 'text-red-500' : data.priority === 'medium' ? 'text-yellow-500' : 'text-lime-600'} mb-3`}>Priority: {data.priority}</h5>
      </div>
    </div>
    <Link to='/tasks'><BiExit className='text-2xl md:text-4xl mt-5 mb-5 cursor-pointer text-gray-600 hover:text-gray-200'/></Link>
  </div>
            
      <div className='p-5'>
        <h3 className='text-gray-500 font-medium text-lg mb-2 uppercase'>Task Information</h3>
        <hr className='border-gray-400 mb-4'/>
        <div className='text-gray-700'>
          <h4 className='font-medium mb-2 uppercase text-gray-600 text-md'>Assigned To:</h4>
          <p className='text-gray-500 font-medium text-sm mb-2 uppercase'>{data.assigned}</p>
          <h4 className='font-medium mb-2 uppercase text-gray-600 text-md'>Description:</h4>
          <p className='text-gray-500 font-medium text-sm mb-2'>{data.body}</p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default TaskView