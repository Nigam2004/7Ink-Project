import React from 'react'
// import GalaryNav from '../Component/GalaryNav'
import { Outlet } from 'react-router-dom'

import GalaryNav from '../Component/GalaryNav'
import All from './All'



function Galary() {
  
  return (
    <div className='container mx-auto pt-[65px]'>
      
     <GalaryNav></GalaryNav>
      <Outlet></Outlet> 
    </div>
  )
}

export default Galary
