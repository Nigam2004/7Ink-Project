import React from 'react'
import { Link } from 'react-router-dom'

function Cards(props) {
    const onedata=props.Onedata
    console.log(onedata)
  return (
    
   <Link to={`/Service/${onedata.id}`} state={onedata}>
   <h1>{onedata.id}</h1>
   <h1>click me</h1>
   </Link>
  
   
  )
}

export default Cards
