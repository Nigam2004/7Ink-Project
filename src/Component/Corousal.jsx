import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { Link } from 'react-router-dom';


function Corousal() {
  let ArtPics=[
    {Image:'arts/Art1.jpg'},
    {Image:'arts/Art2.jpg'},
    {Image:'arts/Art3.jpg'},
    {Image:'arts/Art4.jpg'},
    {Image:'arts/Art5.jpg'},
    {Image:'arts/Art6.jpg'},
  ]
  var settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Slider {...settings}>
        {
          ArtPics.map((pics,index)=>
          <Link to='/galary'>
            <img src={pics.Image} key={index} />
          </Link>
        )
        }
     </Slider>
    )
}

export default Corousal
