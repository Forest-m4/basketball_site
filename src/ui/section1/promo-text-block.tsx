import React from "react";

export const PromoTextBlock = () => {
  return (
    <div className="flex-0 flex-shrink-0 w-[40%]">
      <p className="font-extrabold text-[36px] text-[#2A2D46]">
        Оригинальные и дешевые товары для спортсменов
      </p>
      <p className="font-normal text-[18px] text-[#2A2D46] mt-4 max-w-[350px]" >
        Мы собрали настоящие вещи от лучших брендов, чтобы порадовать вас качественным товаром
      </p>
      <button
        type="button"
        className="mt-6 w-[239px] h-[63px] bg-[#EB2D66] text-white font-bold text-[16px] rounded transition-colors duration-150 hover:bg-[#F24C7E] active:bg-[#FF6B9C]"
      >
        Смотреть каталог
      </button>
    </div>
  );
};