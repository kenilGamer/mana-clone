import { FaArrowRight } from "react-icons/fa6";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

function Page4() {
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: ".page4",
                start: "top 20%",
                end: "top -20%",
                toggleActions: "play none none reverse",
                // markers: true, 
            }
        })
        tl.to(".imgs41",{
            x:350,
            y: -900,
            duration:2
        },"a")
        tl.to(".imgs42",{
            x:-350,
            y: 900,
            duration:2
        },"a")
     })
  return (
    <div className="h-screen w-full page4 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="w-full h-full max-w-7xl mx-auto bg-[#FFF5F9] rounded-3xl relative overflow-hidden flex items-center justify-center text-center shadow-lg">
        
        <div className='z-5'>
        <img 
          src="/public/images/img1.png" 
          alt="Pink Mana Can" 
          className="absolute hidden imgs41 lg:block w-48 md:w-64 lg:w-150 left-0 rotate-30  transform -translate-x-1/4 "
        />

        <img 
          src="/public/images/img4.png" 
          alt="Blue Mana Can" 
          className="absolute imgs42 hidden lg:block w-48 md:w-64 lg:w-150 right-0 top-0 rotate-30 transform -translate-y-1/2 translate-x-1/4"
        />
        </div>
        
        <div className="z-10 flex flex-col items-center justify-center p-4">
          <div className="bg-[#F3EAF2] text-[#390531] text-sm sm:text-base font-semibold px-4 py-2 rounded-full flex items-center gap-2">
            <span role="img" aria-label="sun">☀️</span>
            <span>BOOST ENERGY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl kafir-black text-[#390531] mt-4 sm:mt-6">
            Turning fantasies<br />into reality.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#390531] font-sans font-bold mt-4 sm:mt-6 max-w-md">
            The full strength of Mana is comes from naturally infused taurine.
          </p>

          <button className="border border-[#390531] rounded-full px-6 py-3 mt-6 sm:mt-8 flex items-center gap-3 text-[#390531] font-semibold hover:bg-[#390531] hover:text-white transition-colors">
            <span>Drink it Up</span>
            <div className="bg-[#390531] text-white rounded-full p-1.5 flex items-center justify-center">
                <FaArrowRight />
            </div>
          </button>
        </div>

     

      </div>
    </div>
    
  );
}

export default Page4;
