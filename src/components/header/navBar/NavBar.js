import React from "react";
import Cart from "../../cart/Cart";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <button className="cart-button-header-navbar">
        <Cart />
      </button>
    </div>
  );
};

export default NavBar;
