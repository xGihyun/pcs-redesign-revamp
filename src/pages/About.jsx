import React from 'react';
import { Outlet } from 'react-router-dom';
import TopHeading from '../components/TopHeading';

const About = () => (
  <>
    <TopHeading title={"ABOUT"} />
    <div>
      <Outlet />
    </div>
  </>
)

export default About