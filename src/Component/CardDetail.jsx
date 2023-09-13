import React from "react"
import {  useLocation, useNavigate } from "react-router-dom"

function CardDetail() {
  //UseLocation() is use to access the DATA of current URL  through an object.
    //  const nigam=useLocation()  
     const {state}=useLocation()
     const item=state
     console.log(item)
     const navigate=useNavigate()
    function back(){
         navigate("/Service")
    }
    return (
    <div className='container mx-auto pt-[65px]'>
      <p>{item.Name}</p>
      <p>{item.id}</p>
      <button onClick={back}>black</button>
    </div>
  )
}

export default CardDetail
