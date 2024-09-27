import React, { useContext } from "react";
import "./CartItems.css";
import { Context } from "../../Context/Context";
import remove_icon from "../Assets/cart_cross_icon.png";
import { Link } from "react-router-dom";
const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(Context);
  return (
    <div className="container">
      <h1>My Garden</h1>
      <hr />
      <div className="cartitems">
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div className="cartitems-format">
                  <Link to={`../Monitor/${e.id}`}>
                    <img onClick={window.scrollTo(0, 0)} src={e.image} alt="" />
                  </Link>
                  <div className="info">
                    <h3><p>{e.name}</p></h3>
                    <p>{e.Scientific_name}</p>
                  </div>
                  <img
                    className="cartitems-quantity"
                    src={remove_icon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default CartItems;
