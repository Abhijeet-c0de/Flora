import React, { useContext } from "react";
import { Context } from "../Context/Context.jsx";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum.jsx";
import PlantDisplay from "../Components/PlantDisplay/PlantDisplay.jsx";

const Plant = () => {
  const { all_product } = useContext(Context);
  const { plantId } = useParams();
  const product = all_product.find((e) => e.id === Number(plantId));
  return (
    <div>
      <Breadcrum product={product} />
      <div className="left-right">
      <div className="left"><PlantDisplay product={product} /></div>
      <div className="right"></div>
      </div>
    </div>
  );
};

export default Plant;