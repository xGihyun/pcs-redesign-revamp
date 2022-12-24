import React from 'react'
import { Outlet } from 'react-router-dom'
import TopHeading from '../components/TopHeading'

const Academics = () => (
  <>
    <TopHeading title={"ACADEMICS"} />
    <div>
      <Outlet />
    </div>
  </>
)

export default Academics