import React from 'react'
import './Card.css'

const Card = ({name='dzaghli', desc, imgUrl, hover}) => {
  return (
    <div  className = {`Card ${hover}`}>
      <img src={imgUrl}alt="" />
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  )
}

export default Card
