import React from 'react'
import AboutCard from './AboutCard'


const Aboutus = () => {
  return (
    <div className='w-full bg-white text-dark text-center'>
        <div className='max-w-[1240px] mx-auto px-4 py-16'>
            <div>
                <h1 className='text-4xl py-2'>A Variety of Amnenities</h1>
                <p className='py-10 text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, incidunt reiciendis magnam corrupti possimus asperiores? Laboriosam nihil quam autem dolores culpa perspiciatis blanditiis earum libero porro, minima velit accusamus reprehenderit!
                </p>

            </div>
            {/* Card Container*/}
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
               <AboutCard icon ={'pin-outline'} heading={'One of a kind location'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />

               <AboutCard icon ={'happy-outline'} heading={'Helping Staff'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />

               <AboutCard icon ={'flash-outline'} heading={'Facilities Included'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />

               <AboutCard icon ={'cloudy-night-outline'} heading={'Relaxing atmosphere'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} />
            </div>
        </div>
    </div>
  )
}

export default Aboutus