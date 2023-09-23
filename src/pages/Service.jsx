import React, { Fragment, useEffect, useState } from 'react'
import Cards from '../Component/cards'
// import { Outlet } from 'react-router-dom'

function Service() {
  const [Datas,setDatas]=useState([])
  useEffect(()=>{
    fetch("./Data.json")
  .then(response=>response.json())
  .then(data=>{
    setDatas(data)
  })
  },[])
  
 
  
  return (
    <div className='container mx-auto pt-[65px]'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum pariatur doloribus, consequuntur error, soluta blanditiis at eveniet, quos ad fugit voluptate inventore! Quod repellat asperiores quisquam doloremque repudiandae minus dignissimos quis nam ratione! Veritatis est amet sunt saepe dicta tempora voluptate ullam vero! Quaerat voluptates libero officiis velit corrupti placeat.
      <br />
      <div className='flex'>
      {
         Datas && Datas.map((oneData,index)=>
         <Fragment key={index}>
          <Cards Onedata={oneData}></Cards>
         </Fragment>)
      }
      </div>
      
      
    
    {/* <Outlet></Outlet> */}
    </div>
  )
}

export default Service
