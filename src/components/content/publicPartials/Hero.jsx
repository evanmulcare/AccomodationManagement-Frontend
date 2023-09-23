import React from 'react'
import { Link } from 'react-router-dom'
import heroVid from '../assets/drone.mp4'

const Hero = () => {
  return (
<div className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
  <video className='absolute object-cover z-10 w-full h-full opacity-70' src={heroVid} autoPlay loop muted />
  <div className='w-full h-[90%] z-30 flex flex-col justify-center items-center p-5 text-2xl text-white text-center px-4'>
    <div className='bg-white bg-opacity-25 px-20 py-10 rounded-lg'>
      <h1 className='text-white text-4xl py-2 font-bold drop-shadow-xl'>DOON BAY</h1>
      <h1 className='text-white text-4xl py-2 font-bold drop-shadow-xl'>Caravan Park</h1>
      <div className='flex justify-center items-center my-4'>
        <span className='inline-block'>
          <Link to="/contact">
            <button className='text-white text-xl font-bold cursor-pointer drop-shadow-lg border py-3 px-6 rounded-lg'>
              CONTACT US
            </button>
          </Link>
        </span>
      </div>
    </div>
  </div>
</div>




  )
}

export default Hero