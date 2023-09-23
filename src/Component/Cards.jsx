import React from 'react'
import { Link } from 'react-router-dom'

function Cards(props) {
    const onedata=props.Onedata
    console.log(onedata)
    
  return (
    
   <Link to={`/Service/${onedata.id}`} state={onedata}>
    <div className='bg-slate-500 ' data-aos="fade-upzoom-in-left">
      <div className='p-7'>
        <img src={onedata.Image} alt="" />
      </div>
      <div className='flex flex-col items-center'  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
        <h1 className='Image Name'>{onedata.Name}</h1>
        <p className='size'>"215 x 300"</p>
        <button className='showDatail'>Detail</button>
      </div>
    </div>
   </Link>
  
   
  )
}

export default Cards
