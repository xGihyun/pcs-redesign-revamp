import React from 'react';
import video from '../assets/videos/pcs.mp4';

const Hero = () => {
  return (
    <section className='relative'>
      <video src={video} autoPlay loop muted className='w-full h-screen object-cover brightness-[40%]' />
      <div className='text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center pointer-events-none'>
        <h1 className='text-5xl lg:text-7xl my-10'>Quality Catholic Education</h1>
        <p className='text-base'>Through Faith, Hope, & Charity</p>
      </div>
    </section>
  )
}

export default Hero