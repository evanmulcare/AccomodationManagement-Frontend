import React from 'react'
import { Header } from '../../components/content';
import AuthenticationButton from '../../components/auth/AuthenticationButton';
import {StarRating} from '../../components/content';

const SignIn = () => {
  return (
    <div className='bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
      <Header category="Members" title="Sign-in"/>
      <h4 className='font-semibold text-gray-300'>Administration</h4>
      <div className='border text-center rounded-xl py-12 px-8'>
          <h3 className='font-bold text-gray-400 text-lg'><AuthenticationButton /></h3>
      </div>
      <div className='border text-center rounded-xl py-12 px-8'>
          <h3 className='font-bold text-gray-400 text-lg'>Rate DoonBay</h3>
          <br />
          <div className='items-center'><StarRating /></div>
        </div>
    </div>
  )
}

export default SignIn