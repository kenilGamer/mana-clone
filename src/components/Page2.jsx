import React from 'react'
import Reviewcard from '../partials/review-card'

function Page2() {
  const data = [
    {
      colors: "4b7ed7",
      url: "/images/img4.png",
      review: 4.7,
      flavor: "Black Berry & Hibiscus"
    },
    {
      colors: "ffc43a",
      url: "/images/img3.png",
      review: 4.8,
      flavor: "Grapefruit & Yerba"
    },
    {
      colors: "ff7ecb",
      url: "/images/img1.png",
      review: 4.6,
      flavor: "Tropical Papaya"
    },
  ]
  return (
    <div className='h-screen mb-5 w-full py-5 px-20'>
      <div className='flex items-center justify-between kafir p-10'>
        <h1 className='text-5xl font-black'>Taste the Flavors section</h1>
        <div className='flex items-center justify-center'>
          <img src="/images/4139238.png" className='w-20' alt="" />
          <h3 className='text-3xl w-2/4 font-medium font-sans'>From <span className='font-black kafir'>june</span> August, this is what we <span className='font-black kafir'>Drink.</span></h3>
        </div>
      </div>
        <div className='overflow-hidden'>
          <Reviewcard data={data}/>
        </div>
    </div>
  )
}

export default Page2
