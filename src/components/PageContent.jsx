import React from 'react';
import pcsMain from '../assets/images/pcsMain.jpg';

const PageContent = ({ children }) => {
  return (
    <div className='relative'>
      <img src={pcsMain} alt="" className='w-full h-full absolute object-cover opacity-50' />
      <div className='w-full h-full absolute top-0 left-0 bg-white bg-opacity-80' />
      {children}
    </div>
  )
}

export default PageContent