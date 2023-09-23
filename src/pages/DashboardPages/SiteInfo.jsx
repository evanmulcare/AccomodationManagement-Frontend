import { Header } from '../../components/content';
import Map from '../../components/content/assets/Map.png'
import entrance from '../../components/content/assets/entrance.png'
import {AiOutlineClose} from 'react-icons/ai'




import React, { useState } from 'react';

const SiteInfo = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const [model, setModel] = useState(false);
  const[tempimgSrc, setTempImgSrc] = useState('');


  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return (
    <div className='bg-white dark:text-gray-200 h-auto rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
      <Header category='Members' title='Site Information' />
      <div className={model ?  "model open" : "model"}>
          <img src={Map}/>
          <AiOutlineClose onClick={() => setModel(false)}/>
    </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='relative h-96'>
          <img
            className='absolute inset-0 object-cover w-full h-full rounded-lg shadow-md'
            src={entrance}
            alt='map of caravan park'
          />
          <div className='absolute inset-0 flex justify-center items-center'>
            <button
              className='bg-white text-gray-800 font-bold py-2 px-4 rounded-full shadow-md'
              onClick={() => getImg(Map)}
            >
              View Map
            </button>
          </div>
        </div>
        <div className='space-y-4'>
          <div className='border rounded-xl shadow-md'>
            <button
              className={`w-full px-4 py-2 text-left font-medium text-gray-700 ${
                activeTab === 'tab1' && 'bg-gray-100'
              }`}
              onClick={() => handleClick('tab1')}
            >
              Site Description
            </button>
            <div className={`${activeTab === 'tab1' ? 'block' : 'hidden'} px-4 py-2`}>
              <p className='text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus libero in
                augue dapibus lacinia. Curabitur a ipsum ut sem vehicula dapibus. Praesent varius
                sit amet est at luctus. Integer ut nunc sed justo tincidunt fringilla. Praesent
                posuere sapien sit amet est tincidunt, id gravida metus lacinia. Aliquam suscipit
                lacus eu odio bibendum ullamcorper.
              </p>
            </div>
          </div>
          <div className='border rounded-xl shadow-md'>
            <button
              className={`w-full px-4 py-2 text-left font-medium text-gray-700 ${
                activeTab === 'tab2' && 'bg-gray-100'
              }`}
              onClick={() => handleClick('tab2')}
            >
              Site Amenities
            </button>
            <div className={`${activeTab === 'tab2' ? 'block' : 'hidden'} px-4 py-2`}>
              <ul className='list-disc list-inside'>
                <li className='text-gray-600'>Toilet and Shower Block</li>
                <li className='text-gray-600'>Laundromat</li>
                <li className='text-gray-600'>Shop and Cafe</li>
              </ul>
            </div>
          </div>
          <div className='border rounded-xl shadow-md'>
            <button
              className={`w-full px-4 py-2 text-left font-medium text-gray-700 ${
                activeTab === 'tab3' && 'bg-gray-100'
              }`}
              onClick={() => handleClick('tab3')}
            >
              Site Rules
            </button>
            <div className={`${activeTab === 'tab3' ? 'block' : 'hidden'} px-4 py-2`}>
              <ul className='list-disc list-inside'>
                <li className='text-gray-600'>Pets are not allowed</li>
                <li className='text-gray-600'>Quiet hours are between 10pm and 7am</li>
                <li className='text-gray-600'>Campfires are only allowed in designated areas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SiteInfo;
           
