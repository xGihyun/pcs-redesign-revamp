import React from 'react';
import gradeSchool from '../assets/images/gradeSchool.gif';
import juniorHigh from '../assets/images/juniorHigh.gif';
import seniorHigh from '../assets/images/seniorHigh.gif';
import { Link } from 'react-router-dom';

const Programs = () => {

  const programs = [
    {
      id: 1,
      image: gradeSchool,
      path: '/academics/grade-school'
    },
    {
      id: 2,
      image: juniorHigh,
      path: '/academics/junior-high'
    },
    {
      id: 3,
      image: seniorHigh,
      path: '/academics/senior-high'
    }
  ]

  return (
    <div className='w-full relative bg-pcs bg-cover bg-center'>
      <div className='w-full h-full absolute bg-white bg-opacity-80' />
      <div className='flex flex-col lg:flex-row gap-5 px-[10%] py-[5%]'>
        {programs.map(program => (
          <Link key={program.id} to={program.path}>
            <img src={program.image} alt="pcs" className='w-full h-full rounded-3xl shadow-black shadow-md brightness-[60%] cursor-pointer hover:brightness-100 transition-all duration-300 ease-in-out' />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Programs