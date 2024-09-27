import React from 'react'
import './popular.css'
import data_plant from'../Assets/all_plants.js'
import Item from '../Item/Item.jsx'
const Popular = () => {
  return (
    <div className='popular'>
      <h1>Plant Database</h1>
      <hr />
      <div className="popular-item">
        {data_plant.map((item,i)=>{
          return <Item key={i} id={item.id} image={item.image} name={item.name} scientific_name={item.Scientific_name} />
        })}
      </div>
    </div>
  )
}

export default Popular
