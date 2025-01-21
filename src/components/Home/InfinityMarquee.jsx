import React from 'react'
import Marquee from 'react-fast-marquee'
import star from "../../assets/img/star.png"

const InfinityMarquee = () => {
  return (
    <div className='2xl:h-80 md:h-60 h-40  overflow-hidden flex justify-start items-start mt-0  bg-white dark:bg-gray-800 '>
      <div className='2xl:mt-20 md:mt-10 mt-0 md:h-40 h-40  rotate-[-4deg] flex justify-center items-center w-full'>
      <Marquee autoFill={true} pauseOnHover className='bg-white  h-20 md:text-xl  bg-opacity-5 border-t-[0.1px] border-b-[0.1px] border-black dark:border-white text-black dark:text-white'>
        <div className='flex justify-center md:*:mx-4 *:mx-2   items-center'>
          <img src={star} className='md:w-8 w-6 md:mb-1 ' alt="star" />
          <p>Mobile App</p>
        </div>
        <div className='flex justify-center md:*:mx-4 *:mx-2  items-center'>
          <img src={star} className='md:w-8 w-6 md:mb-1 ' alt="star" />
          <p>Video & Photography</p>
        </div>
        <div className='flex justify-center md:*:mx-4 *:mx-2  items-center'>
          <img src={star} className='md:w-8 w-6 md:mb-1 ' alt="star" />
          <p>Web design</p>
        </div>
        <div className='flex justify-center md:*:mx-4 *:mx-2  items-center'>
          <img src={star} className='md:w-8 w-6 md:mb-1 ' alt="star" />
          <p>Performance Marketing</p>
        </div>
        <div className='flex justify-center md:*:mx-4 *:mx-2  items-center'>
          <img src={star} className='md:w-8 w-6 md:mb-1 ' alt="star" />
          <p>Branding</p>
        </div>
        <div className='flex justify-center md:*:mx-4 *:mx-2  items-center'>
          <img src={star} className='md:w-8 w-6 md:mb-1 ' alt="star" />
          <p>Market Automations</p>
        </div>
        <div className='flex justify-center md:*:mx-4 *:mx-2  items-center'>
          <img src={star} className='md:w-8 w-6 md:mb-1 ' alt="star" />
          <p>Logo design</p>
        </div>
        <div className='flex justify-center md:*:mx-4 *:mx-2  items-center'>
          <img src={star} className='md:w-8 w-6 md:mb-1 ' alt="star" />
          <p>Analytics</p>
        </div>
       </Marquee>
       </div>
    </div>
  )
}

export default InfinityMarquee
