import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

function CardDetail() {
  //UseLocation() is use to access the DATA of current URL  through an object.
  //  const nigam=useLocation()  
  const { state } = useLocation()
  const item = state
  console.log(item)
  const navigate = useNavigate()
  function back() {
    navigate("/Service")
  }
  return (
    <div className='container mx-auto pt-[65px]'>
      <div className="flex gap-11" data-aos="zoom-in-left">
        <img src={item.Image} className="w-[70vh]" />
        <div className="flex flex-col justify-center" data-aos="zoom-out-right">
          <h1>{item.Name}</h1>
          <p>size</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia atque nostrum, ad veritatis rerum esse iusto repellendus dolorem nemo laborum!</p>
          <button onClick={back}>black</button>
        </div>
      </div>
    </div>
  )
}

export default CardDetail
