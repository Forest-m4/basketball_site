import React from "react";

export const PromoCard = () => {
  return (
    <div className="relative w-[615px] h-[369px] ml-auto mr-[40px]">
      <div className="absolute inset-0">
        <img
          src="/images/products/back.jpg"
          alt="фон"
          className="w-full h-full object-cover filter grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-[#0064FF]/50 mix-blend-screen"></div>
      </div>

    <div className="content relative w-full h-full flex items-center justify-end p-0">
    <img
        src="/images/products/cross2.png"
        alt="кроссовки"
        className="shoes relative z-10 transform -translate-x-[50px] mr-[200px] mt-[140px]"
    />
    <div className="text absolute z-20 left-50 top-[60px] max-w-[250px] text-left text-white">
        <h3 className="font-bold text-[17px]">NIKE AIR JORDAN 1</h3>
        <p className="font-normal text-[12px] mt-1">
        Верх из натуральной красной замши дополнен накладкой с текстурой.
        </p>
        <span className="block mt-2 font-bold text-[12px]">5780 руб.</span>
    </div>
    </div>
</div>
  );
}