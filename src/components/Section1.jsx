import React from "react";
import "./Section1.css";

function Section1() {
  return (
    <section className="section1">
      <div className="promo-row">
        <div className="promo-text-block">
          <p className="promo-text">
            Оригинальные и дешевые товары для спортсменов
          </p>
          <p className="promo-text-2">
            Мы собрали настоящие вещи от лучших брендов, чтобы порадовать вас качественным товаром
          </p>
          <button type="button" className="btn">
            Смотреть каталог
          </button>
        </div>

        <div className="card-cross">
          <div className="background">
            <img src="/images/products/back.jpg" alt="фон" />
          </div>

          <div className="content">
            <img
              src="/images/products/cross2.png"
              alt="кроссовки"
              className="shoes"
            />
            <div className="text">
              <h3>NIKE AIR JORDAN 1</h3>
              <p>
                Верх из натуральной красной замши дополнен накладкой с текстурой.
              </p>
              <span>5780 руб.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;