import React from 'react'
import './breadcrum.css'
import arrow_icon from'../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
  const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt=""  />
      Database <img src={arrow_icon} alt=""  />
      {product.name} <img src={arrow_icon} alt=""  />
    </div>
  )
}

export default Breadcrum
