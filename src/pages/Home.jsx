import React from 'react';
import Hero from '../components/Hero';
import Programs from '../components/Programs';

const Home = () => {
  return (
    <>
      <Hero />
      <div className='bg-primary text-white text-center py-10 px-[10%]'>
        <h2 className='text-4xl lg:text-5xl mb-10'>Creating a Brighter Future</h2>
        <p>
        Pateros Catholic School is more than just a school - 
        it's a life experience. Our unique approach to learning enhances our students' 
        education and helps them to explore their dynamic and diverse community.
        Pateros Catholic School provides a rich learning environment that has helped countless students get ahead. 
        Founded in 1961, the School is located in Pateros, Metro Manila and reflects the diverse backgrounds and cultures of the area. 
        We are extremely proud of our students and staff, who are always eager to learn, create and grow together. 
        Give us a call if you need more information.
        </p>
      </div>
      <Programs />
    </>
  )
}

export default Home