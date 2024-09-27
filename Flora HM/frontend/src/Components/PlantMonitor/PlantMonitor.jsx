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
        <div className="sci-name"> {product.new_price} </div>
        <div className="description"> {}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempora magni assumenda a, quibusdam sapiente quisquam laborum aspernatur tenetur doloremque eveniet veniam rem corporis unde voluptatem dolores expedita voluptates reiciendis ipsa esse itaque. Laudantium quod corrupti cupiditate nesciunt voluptatibus a vitae aut natus ullam, nostrum odit velit? Dignissimos, consequuntur hic.
           </div>
        <div className="category"><span>Category</span>:</div>
        <div className="para">Parameters</div>
        <div className="parameters"> 
          <div><span>Soil Temp</span>: {}</div>
          <div><span>Soil Temp</span>: {}</div>
          <div><span>Soil Temp</span>: {}</div>
          <div><span>Soil Temp</span>: {}</div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Monitor</button>
      </div>
    </div>
  );
};

export default PlantDisplay;
