import React from 'react'
import { Header } from '../../components/content';
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from '../../components/auth/AuthenticationButton';
import {StarRating} from '../../components/content';

const Exit = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
<div className='bg-white dark:text-gray-200 rounded-xl p-8 m-3'>
  <div className='flex justify-between items-center mb-6'>
    <Header category='Members' title='Exit' />
  </div>
  <div className='border rounded-xl py-8 px-4 mb-4'>
    <h3 className='font-medium mb-2 uppercase text-gray-400 text-lg'>User Information</h3>
    <div className='flex justify-between items-center'>
      <p className='text-gray-600 font-medium text-sm mb-2 uppercase'>Account email:</p>
      <p className='text-gray-500 font-medium text-sm mb-2'>{user.name}</p>
    </div>
  </div>
  <div className='border rounded-xl py-8 px-4 mb-4'>
    <h3 className='font-medium mb-2 uppercase text-gray-400 text-lg'>Sign Out</h3>
    <div className='text-center'>
      <AuthenticationButton />
    </div>
  </div>
  <div className='border rounded-xl py-8 px-4'>
    <h3 className='font-medium mb-2 uppercase text-gray-400 text-lg'>Rate DoonBay</h3>
    <div className='flex justify-center items-center'>
      <StarRating />
    </div>
  </div>
</div>


  )
}

export default Exit