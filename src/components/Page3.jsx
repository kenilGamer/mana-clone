import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

function Page3() {
 useGSAP(()=>{
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".page3",
            start: "top 20%",
            end: "top -20%",
            toggleActions: "play none none reverse",
            // markers: true, 
        }
    })
    tl.from(".left-em",{
        x:-400,
        scale:0
    },"a")
    tl.from(".right-em",{
        x:400,
        scale:0
    },"a")
    tl.from(".left-em2",{
        x:-400,
        scale:0
    },"b")
    tl.from(".right-em2",{
        x:400,
        scale:0
    },"b")
 })
  return (
    <div className="h-screen w-full p-4 sm:p-6 md:p-10 kafir-black text-[#390531] page3">
      <div className="w-full h-[60vh] flex flex-col lg:flex-row ">
        <div className="h-full w-full lg:w-1/2 p-4 sm:p-7 flex left-em items-center flex-col text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex flex-col sm:flex-row items-center justify-center lg:justify-start p-2 sm:p-5">
            Drink your{" "}
            <img
              src="/public/images/image-removebg-preview.png"
              className="w-20 sm:w-24 md:w-28 lg:w-30 -mt-2 sm:-mt-4 lg:-mt-6"
              alt=""
            />
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl -mt-6 sm:-mt-8 lg:-mt-02">war to happiness</h1>
          <h4 className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 sm:mt-4 lg:mt-5 mb-3 sm:mb-4 lg:mb-5">
            Get You <span className="kafir italic">energy</span> every{" "}
            <span className="kafir italic">sip</span>
          </h4>
          <p className="text-base sm:text-lg md:text-xl font-sans w-full max-w-md lg:max-w-none">
            A gentle wave of energy to activate you without Jittering.
          </p>
        </div>
        <div className="h-full w-full lg:w-1/2 mt-6 lg:mt-0 right-em">
            <img src="/public/images/mure-03_710x840_crop_center@2x.webp" className="w-full h-64 sm:h-80 md:h-96 lg:h-full object-cover rounded-lg" alt="" />
        </div>
      </div>
      <div className="w-full h-[40vh] mt-8 lg:mt-0">
        <div className="w-full flex flex-col lg:flex-row h-full p-4 sm:p-5">
            <div className="w-full lg:w-1/3 h-48 sm:h-64 lg:h-full mb-4 lg:mb-0 left-em2">
              <img className="w-full h-full object-cover rounded-lg" src="/public/images/nutrition_959ce780-42e2-4b23-9d85-7dbe5ed2531b_650x650_crop_center@2x.webp" alt="" />
            </div>
            <div className="w-full lg:w-2/3 h-full gap-4 sm:gap-6 lg:gap-8 flex right-em2 flex-col items-center justify-center text-center lg:text-left">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans w-full max-w-2xl">A special blend of Taurine, and Vitamins provide smooth long lasting energy.</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;

