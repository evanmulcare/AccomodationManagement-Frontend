import React from 'react'

const Header = ({ category, title}) => {
  return (
    <div className='mb-10'>
  <p className='text-gray-500 font-medium text-sm mb-2 uppercase'>{category}</p>
  <h1 className='font-medium mb-2 uppercase text-gray-600 text-2xl'>{title}</h1>
    </div>
  )
}

export default Header