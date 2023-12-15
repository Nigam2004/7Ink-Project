import React from "react";
import {
  AiFillHome,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaServicestack, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { MdRoundaboutRight } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // <--------------Footer container-------------->
    <div className="bg-[#5b4218] mt-3" data-aos="zoom-in-up">
      {/* <----------Footer social Link--------------> */}
      <div className="p-4 flex sm:justify-between flex-wrap">
        <h1 className="tomato text-2xl">
          Get connected with us on social network:
        </h1>
        <div className=" flex gap-x-10 items-center">
          <a
            href="https://www.instagram.com/bindas_ramesh2/"
            target="_blank"
            className="text-2xl"
          >
            <AiOutlineInstagram></AiOutlineInstagram>
          </a>
          <a
            href="https://www.youtube.com/@RameshArtBox"
            className="text-2xl"
            target="_blank"
          >
            <AiOutlineYoutube></AiOutlineYoutube>
          </a>
          <a href="" className="text-2xl">
            <FaTwitter></FaTwitter>
          </a>
          <a href="" className="text-2xl">
            <FaLinkedinIn></FaLinkedinIn>
          </a>
        </div>
      </div>
      <hr className="border-black border-t" />
      {/* <--------------footer main section----------------> */}
      <div className="sm:flex" id="footer">
        <div className="sm:w-1/4 sm:flex items-center justify-center hidden ">
          <h1>logo</h1>
        </div>
        <div className="sm:w-1/4 flex flex-col items-center">
          <h1 className="p-3 tomatosemi text-2xl">Quick Links</h1>
          <ul>
            <li>
              <Link to="/" className="listfooter">
                <AiFillHome></AiFillHome>Home
              </Link>
            </li>
            <li>
              <Link to="/service" className="listfooter">
                <FaServicestack></FaServicestack>service
              </Link>
            </li>
            <li>
              <Link to="/galary" className="listfooter">
                <BiSolidPhotoAlbum></BiSolidPhotoAlbum>Galary
              </Link>
            </li>
            <li>
              <Link to="/about" className="listfooter">
                <MdRoundaboutRight></MdRoundaboutRight>About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="listfooter">
                <BsFillTelephoneOutboundFill></BsFillTelephoneOutboundFill>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="sm:w-1/4 flex justify-center">
          <h1 className="p-3 tomatosemi text-2xl">Developer Detail</h1>
        </div>
        <div className="sm:w-1/4 flex justify-center">
          <h1 className="p-3 tomatosemi text-2xl">Contact Information</h1>
        </div>
      </div>
      <div className="flex justify-center items-center p-3 bg-[#37290f] text-[#d7aa65]">
        <p>&copy;2023 Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
