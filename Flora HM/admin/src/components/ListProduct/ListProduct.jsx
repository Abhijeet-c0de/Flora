import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import Sidebar from "../Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import cross_icon from "../../assets/cart_cross_icon.png";

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:3000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id)=>{
    await fetch('http://localhost:3000/removeproduct',{
      method:"POST",
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className="list-product">
      <h1>All Plants List</h1>
      <div className="listproduct-format-main">
        <p>Plants</p>
        <p>Name</p>
        <p>Scientific-name</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              <div
                key={index}
                className="listproduct-format-main listproduct-format "
              >
                <img
                  src={product.image}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>{product.Scientific_name}</p>

                <img onClick={()=>{remove_product(product.id)}}
                  src={cross_icon}
                  alt=""
                  className="listproduct-remove-icon"
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
