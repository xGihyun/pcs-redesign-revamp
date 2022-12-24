import React from 'react';
import pcsAnnex2 from '../assets/images/pcsAnnex2.jpg';

const TopHeading = ({ title }) => {
  return (
    <div className='h-72 relative flex items-center justify-center border-b-8 border-b-primary'>
      <img src={pcsAnnex2} alt="pcs annex" className='w-full h-full object-cover brightness-[40%] absolute' />
      <h1 className='text-white text-4xl z-10 font-bold'>{title}</h1>
    </div>
  )
}

export default TopHeading