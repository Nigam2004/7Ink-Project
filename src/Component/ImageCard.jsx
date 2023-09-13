import React from 'react'

function ImageCard(props) {
  
  
  return (
    <>
       <img src={props.image} className=''  />
        <span>{props.name}</span>
    </>
  )
}

export default ImageCard
