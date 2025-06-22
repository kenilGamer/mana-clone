import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { TfiTicket } from "react-icons/tfi";
import { HiOutlineMail } from "react-icons/hi";


function Footer() {
  return (
    <div className="w-full mt-10">
      <div className="bg-white rounded-t-3xl max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-2 p-16">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl kafir font-bold">Home</h2>
              <ul className="text-xl kafir mt-2 space-y-1">
                <li><a href="#" className="hover:text-[#4a0e2a] transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-[#4a0e2a] transition-colors">Flavours</a></li>
              </ul>

              <h2 className="text-2xl kafir font-bold mt-8">Consumpsion</h2>
              <p className="text-5xl kafir-black mt-2">1.6ML</p>
            </div>
            <div>
              <h2 className="text-2xl kafir font-bold">About Us</h2>
              <ul className="text-xl kafir mt-2 space-y-1">
                <li><a href="#" className="hover:text-[#4a0e2a] transition-colors">Review</a></li>
                <li><a href="#" className="hover:text-[#4a0e2a] transition-colors">Community</a></li>
              </ul>

              <h2 className="text-2xl kafir font-bold mt-8">Shop</h2>
              <ul className="text-xl kafir mt-2 space-y-1">
                <li><a href="#" className="hover:text-[#4a0e2a] transition-colors">Blackberry</a></li>
                <li><a href="#" className="hover:text-[#4a0e2a] transition-colors">Grapefruit</a></li>
                <li><a href="#" className="hover:text-[#4a0e2a] transition-colors">Tropical</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src="/images/logo.png" className="w-96" alt="MANA logo" />
            <p className="text-3xl kafir-black mt-4 text-center">We carefully crafted each<br/>can with all the benefits for<br/>the right time!</p>
          </div>
        </div>
        <div className="grid grid-cols-4 divide-x border-t">
          <a href="#" className="flex items-center justify-center p-6 gap-2 group hover:bg-gray-50 transition-colors">
            <h3 className="kafir text-xl group-hover:text-[#4a0e2a] transition-colors">FACEBOOK</h3>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#" className="flex items-center justify-center p-6 gap-2 group hover:bg-gray-50 transition-colors">
            <h3 className="kafir text-xl group-hover:text-[#4a0e2a] transition-colors">INSTAGRAM</h3>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#" className="flex items-center justify-center p-6 gap-2 group hover:bg-gray-50 transition-colors">
            <h3 className="kafir text-xl group-hover:text-[#4a0e2a] transition-colors">TIKTOK</h3>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#" className="flex items-center justify-center p-6 gap-2 group hover:bg-gray-50 transition-colors">
            <h3 className="kafir text-xl group-hover:text-[#4a0e2a] transition-colors">TWITTER</h3>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div className="bg-[#4a0e2a] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center justify-items-center p-4">
            <div className="flex items-center gap-2">
                <TfiTicket size={20}/>
                <h3 className='text-sm kafir'>15% Off on $100+ Purchase</h3>
            </div>
            <div className="flex items-center gap-2">
                <HiOutlineMail size={20}/>
                <h3 className='text-sm kafir'>Subscribe & Save 15%</h3>
            </div>
            <div className="flex items-center gap-2">
                <TfiTicket size={20}/>
                <h3 className='text-sm kafir'>15% Off on $100+ Purchase</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
