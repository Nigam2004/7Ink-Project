import React from 'react'
import Typewriter from 'typewriter-effect'

function TypeWriter() {
  return (

    <span className='font-bold text-[#5b4218] flex'>
      <Typewriter
        options={{
          strings: ["Artwork"],
          autoStart: true,
          loop: true,
          delay: 150,
         }}
      />
    </span>
    )
}

export default TypeWriter
