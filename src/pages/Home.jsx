import React, { Component, useEffect } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Corousal from '../Component/Corousal'
import Footer from '../Component/Footer'
import TypeWriter from '../Component/TypeWriter'
import Aos from 'aos'
import 'aos/dist/aos.css';
function Home() {
  
  Aos.init({ duration: 1000 });

 
  return (
    <>
    <div className="container mx-auto  pt-[65px] " id='home'>
      <div className=' bg-slate-100 md:flex p-8  justify-between'>
        {/* <----------------- Main-Left-side------------> */}
        <div className="flex  flex-col items-start">
          <h1 className='sandbrush text-9xl leading-[0.70] text-[#5b4218] hover:scale-110 duration-1000 '>Creating</h1>
          <h2 className=' text-5xl monserrat'>amazing memories</h2>
          <div className='text-6xl gap-2 sm:flex items-center'>through <TypeWriter></TypeWriter></div>
          <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sunt natus. Earum maiores cumque dicta fugit dolores itaque eligendi id!</p>
          {/* <---------------Button section-------------------> */}
          <div className='sm:flex gap-x-[5rem] items-center'>
            <Link to='/galary' className='rounded bg-[#755825] h-[4rem] w-[9rem] flex justify-center      items-center gap-1 text-[#d7aa65] hover:scale-95 duration-[1s] ease-in-out hover:text-[#755825] hover:bg-transparent hover:font-bold'>Order Now
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </Link>
            <div className="  sm:w-[150px] hidden "> <img src="Images/female.svg" /></div>

            <div className="hidden "><img src="Images/male.svg" /></div>
          </div>
        </div>
        {/* <-----------------Right-side------------->  */}
        <div className="w-[100%] flex justify-center hover:scale-105 duration-1000 hover:skew-y-3">
          <img src="Images/big.svg" className=' ' />
        </div>
      </div>
      {/* <--------------Corousal------------->  */}
      <div className=" bg-[#5b4218] p-8 ">
        <div className='hover:scale-y-105 duration-[1s] static'>
          <Corousal className='fixed' ></Corousal>
        </div>
      </div>
      {/* <--------------------Feature-section--------------------> */}
      <div className=" bg-slate-300 px-8 pt-8 md:flex delay-1000" data-aos="zoom-in-up" >
        <div className=" content w-[100%] flex items-center  " >
          <img src="Images/male.svg" className='md:hover:scale-110 duration-1000 md:hover:translate-x-8 hover:scale-110 ' />
        </div>
        <div className="flex flex-col justify-center">
          <h1> Conetent</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus omnis ut suscipit, nesciunt, atque animi inventore quasi reiciendis vitae similique necessitatibus deleniti. Pariatur, labore esse sit qui exercitationem possimus sint.</p>
        </div>
      </div>
      <div className=" bg-slate-300 px-8 pb-8 flex md:flex-row flex-col-reverse delay-[2s]" data-aos="fade-right">
        <div className="flex flex-col justify-center">
          <h1> Conetent</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus omnis ut suscipit, nesciunt, atque animi inventore quasi reiciendis vitae similique necessitatibus deleniti. Pariatur, labore esse sit qui exercitationem possimus sint.</p>
        </div>
        <div className="md:w-[100%] flex items-center ">
          <img src="Images/female.svg" className='md:hover:scale-110 duration-1000 md:hover:-translate-x-8
            hover:scale-110'/>
        </div>
      </div>

    </div>
    <Footer></Footer>
    </>
  )
}

export default Home
