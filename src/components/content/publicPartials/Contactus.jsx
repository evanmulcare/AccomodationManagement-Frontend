import React from 'react'
import Button from '../generalPartials/Button'

const Contactus = () => {
  return (

    <div className='flex items-center justify-center w-full text-black bg-zinc-100'>
        <div className='max-w-[1240px] px-20 py-16'>
            
            <div className='bg-white flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0  w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg'>
            <div className='flex flex-col space-y-8 justify-between'>
                <div>
                    <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                    <p className='pt-2 text-black text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ab delectus blanditiis explicabo. Voluptate, accusamus?</p>
                </div>
                <div className='flex flex-col space-y-6'>
                    <div className='inline-flex space-x-2 items-center'>
                        <ion-icon name="call" className="text-teal-500 text-xl"></ion-icon>
                        <span>+(087) 453 8423</span>
                    </div>
                    <div className='inline-flex space-x-2 items-center'>
                        <ion-icon name="mail" className="text-teal-500 text-xl"></ion-icon>
                        <span>donnbay@gmail.ie</span>
                    </div>
                    <div className='inline-flex space-x-2 items-center'>
                        <ion-icon name="location" className="text-teal-500 text-xl"></ion-icon>
                        <span>Doon bay Rd, Ballybunion, kerry</span>
                    </div>
                </div>
                <div className='flex space-x-4 text-lg'>
                <a href='#'><ion-icon name="logo-facebook" className="text-teal-500 text-xl"></ion-icon></a>
                </div>
            </div>
            <div>
                    <div className='bg-lime-700 rounded-xl shadow-lg p-8 text-white md:w-80'>
                        <form action="" className='flex flex-col space-y-4'>
                            <div>
                                <label for="" className='text-sm'>Name</label>
                
                                <input type="text" placeholder='Your Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />

                            </div>
                            <div>
                                <label for="" className='text-sm'>Email Address</label>
                
                                <input type="email" placeholder='Email Address' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />

                            </div>
                            <div>
                                <label for="" className='text-sm'>Message</label>
                
                                <textarea placeholder='Message' rows="4" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' />
                                
                            </div>
                                <Button className='inline-block self-end text-xl font-bold'>SEND MESSAGE</Button>
                        </form>
                    </div>
            </div>
            </div>
            
          
            <br />
            {/*MAP*/}
            <div className='bg-white w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg'>
            <div>
                    <h1 className='font-bold text-4xl tracking-wide text-black'>Location</h1>
                    <p className='pt-2 text-black text-sm py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ab delectus blanditiis explicabo. Voluptate, accusamus?</p>
                    <div className='rounded'>
                        <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Doon%20Bay%20Road%20Ballybunion+(Doon%20Bay%20Caravan%20Park)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>
                </div>
                
             </div>

            

        </div>
        
    </div>
  )
}

export default Contactus