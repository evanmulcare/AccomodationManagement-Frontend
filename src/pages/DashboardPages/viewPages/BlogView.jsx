import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import { BiExit } from 'react-icons/bi'

const BlogView = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

    useEffect(() => {
      Axios.get(`https://accomodationmanagementbackend.onrender.com/blogs/${id}`)
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => console.error(err));
     }, [data]) 
  
  return (
<div className='m-2 md:m-10 p-8 bg-white rounded-3xl shadow-lg'>
  <div className='border-b-2 border-gray-200 pb-4 mb-4 flex justify-between items-center'>
    <h3 className='font-medium mb-2 uppercase text-gray-600 text-2xl'>{data.title}</h3>
    <Link to='/blog' className='inline-block ml-auto'>
      <BiExit className='text-3xl text-gray-600 hover:text-gray-900 transition-colors duration-300' />
    </Link>
  </div>
  <div className='text-gray-500 font-medium text-md mb-2'>
    {data.body}
  </div>
  <div className='text-sm text-gray-600'>
    <span className='font-medium'>Written by:</span> {data.author}
  </div>
</div>

  )
}

export default BlogView