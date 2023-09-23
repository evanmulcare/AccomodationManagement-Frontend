import React, { useState } from 'react'
import entrance from '../assets/entrance.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'

const Gallery = () => {
    const slides = [
        {
          url: entrance,
        },
        {
          url: pic2,
        },
        {
          url: pic3,
        },
    
        {
          url: pic4,
        },
        {
          url: pic5,
        },
      ];

      const [currentIndex, setCurrentIndex] = useState(0)

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      }
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }

      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      }
       

  return (

    <div className='flex items-center justify-center w-full text-dark bg-white'>
        <div className='max-w-[1240px] px-4 py-16'>
            <div className='text-center'>
                <h1 className='text-4xl py-2'>Photo Gallery</h1>
                <hr class="my-4 mx-auto w-48 h-1 bg-gray-400 rounded border-0 md:my-10 dark:bg-gray-700"></hr>
            </div>

            {/*Slider*/}
            <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
                 <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}className='w-full h-full rounded-2xl bg-center bg-cover        duration-500'></div>

                 {/* left Arrow */}
                 <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-6xl p-2 text-white cursor-pointer'>
                    <ion-icon name="arrow-back-circle" onClick={prevSlide}></ion-icon>
                    </div>
                {/* Right Arrow */}
                 <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-6xl p-2 text-white cursor-pointer'>
                    <ion-icon name="arrow-forward-circle" onClick={nextSlide}></ion-icon> 
                 </div>
                 <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)}className='text-xs cursor-pointer p-2 text-gray-600'>
                            <ion-icon name="ellipse" ></ion-icon>
                        </div>
                    ))}
                 </div>
            </div>


            <div className='text-center'>
                <p className='py-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas numquam natus ipsam quam quo voluptates atque nesciunt ea, distinctio soluta?</p>
            </div>
            
            
        </div>
    </div>
  )
}

export default Gallery