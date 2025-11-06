import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <div className="container-fluid">
        {/* Лого + название */}
        <div className="logo-block">
          <img src="/images/ui/logo.png" alt="Basketballer logo" className="logo" />
          <div className="logo-text">
            <h1 className="site-title">Баскетболер</h1>
            <p className="site-subtitle">Магазин баскетбольных товаров</p>
          </div>
        </div>
        
        {/* Основное меню */}
        <ul className="nav-menu">
          <li className="nav-item"><a className="nav-link" href="#">Мячи</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Кроссовки</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Майки</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Шорты</a></li>
          <li className="nav-item"><a className="nav-link" href="#">...</a></li>
          <li className="nav-item_num">
            <a className="nav-link_num" href="#">8(908)45-32-7798</a>
          </li>
          <li className="nav-item">
            <button className="my-btn" type="button">Заказать звонок</button>
          </li>
        </ul>

        {/* Контакты + кнопка + корзина */}
        <div className="contacts-cart">
          <div className="cart">
            <img src="/images/ui/store.png" alt="Корзина" className="cart-icon" />
            <span className="cart-count">0 $</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;