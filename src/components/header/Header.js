import React from "react";
import NavBar from "./navBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-from-header">
      <div className="header-app-name-logo">ReactMeals</div>
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
