import React from 'react'
import logo from '/images/logo.png'
import { RiMenu2Line } from 'react-icons/ri'
function Navbar() {
  return (
    <div className='h-14 w-full'>
      <div className='flex justify-between h-full font-black text-xl items-center px-5 md:px-20 navbar '>
          <img src={logo} className='w-40 nav-logo' alt="logo" />
          <div className='flex gap-10 max-md:hidden font-sans kafir-black font-bold nav-item'>
            <a href="#" className="">Flavors</a>
            <a href="#">Shop</a>
            <a href="#">Story</a>
            <a href="#">Blog</a>
            <a href="#">Community</a>
          </div>
          <div className='flex gap-10 items-center nav-crad'>
            <a href="">Cart (<span className='text-amber-500'>2</span>)</a>
            <RiMenu2Line />
          </div>
      </div>
      
    </div>
  )
}

export default Navbar
