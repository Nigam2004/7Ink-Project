import React from 'react'
import ImageCard from '../Component/ImageCard'

function Images() {
  const GalaryImages=[
     {img:'/arts/Art1.jpg',Name:'Image1'},
     {img:'/arts/Art2.jpg',Name:'Image2'},
     {img:'/arts/Art3.jpg',Name:'Image3'},
     {img:'/arts/Art4.jpg',Name:'Image4'},
     {img:'/arts/Art5.jpg',Name:'Image5'},
     {img:'/arts/Art6.jpg',Name:'Image6'},
    
  ]
  return (
    <div className='pt-4 w-full sm:grid sm:grid-cols-3  gap-x-5 gap-y-5 px-4  items-center'>
      {
     GalaryImages.map((Image,index)=>
       <div className='text-center border-black border  rounded-md p-2 bg-[#5b4218] hover:scale-105 duration-1000 ease-in-out hover:shadow-xl  w-full' key={index}>
        <ImageCard image={Image.img} name={Image.Name} product={Image}></ImageCard>
      </div>
      )  
      }
    </div>
    
    
  )
}

export default Images
