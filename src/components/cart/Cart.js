import React from "react";
import CartCount from "./cartCount/CartCount";
import logo from "./cartImages/shopping.png";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="inside-cart-cc">
      <img className="cart-image" src={logo} alt=""></img>
      <p>Your cart</p>
      <CartCount />
    </div>
  );
};

export default Cart;
