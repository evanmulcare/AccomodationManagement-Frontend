import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-lime-600 text-white py-3 px-5 rounded-3xl md:ml-8 hover:bg-indigo-400 duration-500'>
        {props.children}
    </button>
  )
}

export default Button