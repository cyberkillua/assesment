import React from "react";
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-image">
        <img src={Logo} alt="Boldo Logo" />
      </div>
      <div className="header-links">
        <div>
          <a href="#">Product</a>
        </div>
        <div>
          <a href="#">Services</a>
        </div>
        <div>
          <a href="#">About</a>
        </div>
        <div className="btn">
          <button>Log In</button>
        </div>
      </div>
    </div>
  );
}
