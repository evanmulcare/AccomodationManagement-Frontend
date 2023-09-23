import React, { useEffect, useState } from 'react';
import { Header } from '../../components/content';
import { Link } from 'react-router-dom'
import Axios from 'axios';


const Blog = () => {

  const [data, setData] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);


  useEffect(() => {
    Axios.get('https://accomodationmanagementbackend.onrender.com/blogs')
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => console.error(err));
  }, [data])

  const blogDelete = (id, e) => {
    e.preventDefault();
    Axios.delete(`https://accomodationmanagementbackend.onrender.com/blogs/${id}`)
      .then(function (response) {
        console.log(response);
        setShowConfirmation(true);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  useEffect(() => {
    if (showConfirmation) {
      setTimeout(() => {
        setShowConfirmation(false);
      }, 2000);
    }
  }, [showConfirmation]);



  const arr = data.map((data, index) => {
    return (
      <div className='bg-white p-4 rounded-lg shadow-md'>
        <div className='flex items-center justify-between mb-4'>
          <div className='font-medium mb-2 uppercase text-gray-600 text-lg'>{data.title}</div>
          <button className='bg-gray-400 p-1 grid place-items-center rounded-md text-white text-xs'>
            {data.tags}
          </button>
        </div>

        <div className='text-gray-500 font-medium text-sm mb-2'>{data.body}</div>

        <div className='flex items-center justify-between mt-4'>
          <div className='text-sm text-gray-500'>
            Written by: <span className='font-bold'>{data.author}</span>
          </div>

          <div className='space-x-2'>
            <Link to={`/blog/${data._id}`}>
              <button className='bg-green-200 text-green-800 hover:bg-green-300 font-medium py-2 px-3 rounded-md text-sm'>
                View
              </button>
            </Link>

            <button onClick={(e) => blogDelete(data._id, e)} className='bg-red-200 text-red-800 hover:bg-red-300 font-medium py-2 px-3 rounded-md text-sm'>
              Delete
            </button>
          </div>
        </div>
      </div>
    )
  })



  return (
    <div className='bg-white dark:text-gray-200 h-auto rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
      {showConfirmation && (
        <div className="bg-red-500 text-white text-center p-3 rounded-lg">
          Blog Deleted successfully.
        </div>
      )}
      <div className='flex justify-between items-center mb-6'>
        <Header category="Planning" title="Blog" />
        <Link to="/new-blog">
          <button className='bg-lime-700 hover:bg-lime-600 text-white font-medium py-2 px-4 rounded-md'>New Post</button>
        </Link>
      </div>
      <div className='bg-white p-4 rounded-lg shadow-md'>
        <h3 className='font-bold text-gray-600 text-lg mb-4'>Past Posts</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {arr}
        </div>
      </div>
    </div>
  )
}

export default Blog