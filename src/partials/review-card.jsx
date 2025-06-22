import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

function Reviewcard({data}) {
    useGSAP(()=>{
        gsap.from(".card-img",{
            scrollTrigger:{
                trigger: ".card",
                start: "top 50%",
                end: "top 20%",
                toggleActions: "play none none reverse",
                // markers: true, 
            },
            y: -500,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        })
    }, [])
  return (
    <div className="flex gap-8 w-full items-center justify-center h-120 p-10 card ">
      {data.map((item, index) => (
        <div
         
          key={index}
          className="rounded-xl flex flex-col items-center justify-between p-6 relative"
          style={{ background: `#${item.colors}`}}
        >
          {/* Review badge */}
          <div className="absolute top-4 right-4 flex items-center bg-white rounded-full px-4 py-1 shadow text-lg font-bold">
            <span className="text-yellow-500 mr-2">★</span>
            {item.review}
          </div>
          {/* Can image */}
          <img src={item.url} alt={item.flavor} className=" object-contain mx-auto card-img" />
          {/* Flavor name */}
          <div className="bg-white rounded-lg px-6 py-3 mt-6 text-xl font-black text-center text-[#390531] shadow" style={{marginTop: 32}}>
            {item.flavor}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Reviewcard
