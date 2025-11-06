import React from "react";
import "./Navbar.css"; // твой старый CSS

function Navbar() {
  return (
    <header>
      <div className="container-fluid">
        {/* Лого + название */}
        <div className="logo-block">
          <img src="images/ui/logo.png" alt="Basketballer logo" className="logo" />
          <div className="logo-text">
            <h1 className="site-title">Баскетболер</h1>
            <p className="site-subtitle">Магазин баскетбольных товаров</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;