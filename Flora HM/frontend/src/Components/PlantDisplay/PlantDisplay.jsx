import React, { useContext } from "react";
import "./PlantDisplay.css";
import { Context } from "../../Context/Context.jsx";

const PlantDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(Context)

  return (
    <div className="plantdisplay">
      <div className="plantdisplay-left">
        <div className="plantdisplay-img-list">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="plantdisplay-right">
        <h1>{product.name}</h1>
        <div className="sci-name"><span>Scientific-name</span>: {product.Scientific_name} </div>
        <div className="description"> Description:{product.desc}
           </div>
        <div className="category"></div>
        <div className="para">Parameters</div>
        <div className="parameters"> 
          <div><span>soil_moisture</span>: {product.soil_moisture}</div>
          <div><span>soil_temperature</span>: {product.soil_temperature}</div>
          <div><span>light_intensity</span>: {product.light_intensity}</div>

        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add to MyGarden</button>
      </div>
    </div>
  );
};

export default PlantDisplay;
