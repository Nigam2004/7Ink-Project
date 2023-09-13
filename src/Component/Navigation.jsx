import React, { useState } from 'react'
import { AiOutlineMenu, AiFillHome, AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'



function Navigation() {
  var prevScrollpos = window.scrollY;
  // console.log(prevScrollpos)
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    // console.log(currentScrollPos)
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-55px";
    }
    prevScrollpos = currentScrollPos;
  }
  const Links = [
    { name: 'Home', Link: '/', id: '1' },
    { name: 'Service', Link: '/service', id: '2' },
    { name: 'Galary', Link: '/galary', id: '3' },
    { name: 'Contact Us', Link: '/contact', id: 4 },
    { name: 'About us', Link: '/about', id: 5 },
  ]
  let [isopen, setisOpen] = useState(false)
  return (
    <div className=" w-full fixed  bg-[#5b4218] duration-500 ease-out z-10" id='navbar'>
      <nav className='md:flex justify-between w-full bg-[#5b4218] py-4 items-center container mx-auto'>
        <div className=' ml-3'><h1 className='text-black font-bold'>Logo</h1></div>
        <div className='md:hidden  absolute right-8 top-[13px] cursor-pointer' onClick={() => setisOpen(!isopen)}>
          {
            isopen ? <AiOutlineClose className='h-7 w-7'></AiOutlineClose> : <AiOutlineMenu className='h-7 w-7'></AiOutlineMenu>
          }

        </div>
        {/* ......Navlinks..... */}
        <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute bg-[#5b4218] md:static 
             md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${isopen ? 'top-12' : 'top-[-490px]'}`} >
          {
            Links.map((list, index) =>
              <li className='md:mx-3 md:my-0 my-3 font-semibold text-[#d7aa65]' key={index}>
                <NavLink to={list.Link}>{list.name}</NavLink>
              </li>
            )
          }
        </ul>

      </nav>
    </div>

  )
}

export default Navigation
