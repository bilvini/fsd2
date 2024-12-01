import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className='mx-4 my-3 lg:mx-44 mt-1 min-h-[75vh]'>
      
      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
        {/* -----------Image Container-------------*/}
    <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
        {/* ---------------Left Side--------------*/}
        <div>
            <p className='font-semibold texxt-gray-600 mb-2'>Original</p>
            <img  className='rounded-md border' src={assetsimage_w_bg} alt="" />
        </div>
        {/*----------------Right side------------*/}
        <div className='flex flex-col'>
            <p className='font-semibold text-gray-600 mb-2'>Background Removed</p>
            <div>
                {/* <img src={assets.image_wo_bg} alt="" /> */}
                <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2'>

                </div>
            </div>
        </div>
        <img src={assets.image_w_bg}  alt="" />
    </div>
      </div>
    </div>
  )
}

export default Result