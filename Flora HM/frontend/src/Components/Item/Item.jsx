import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item">
      <Link to={`../plant/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
      </Link>
      <h3><p>{props.name}</p></h3>
      <div className="item-prices">
        <div className="item-price-new">{props.scientific_name}</div>
      </div>
    </div>
  );
};

export default Item;
