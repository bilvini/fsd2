import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg-:px-4 py-3'>
      <img  width={50} src={assets.logo} alt="" />
      <p className='flex-1 boarder-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>All right reserved. Copyright @bg removal</p>
      <div className='flext gap-1'>
        <img width={40} src={assets.facebook_icon} alt="" />
        <img width={40} src={assets.twitter_icon} alt="" />
        <img width={40} src={assets.google_plus_icon} alt="" />

      </div>
    </div>
  )
}

export default Footer
