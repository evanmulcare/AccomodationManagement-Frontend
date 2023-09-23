import React from 'react'
import { Header } from '../../components/content';
import Contactus from '../../components/content/publicPartials/Contactus';
const Contact = () => {
  return (
    <div className='bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
       <Header category="Pages" title="Contact"/>
       <Contactus />
    </div>
  )
}

export default Contact