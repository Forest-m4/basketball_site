import React from "react";

export const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      <img src="/images/ui/logo.png" alt="Basketballer logo" className="w-[29px] h-auto" />
      <div className="flex flex-col">
        <h1 className="text-[14px] font-bold text-blue-700 m-0">Баскетболер</h1>
        <p className="text-[12px] text-gray-800 m-0">Магазин баскетбольных товаров</p>
      </div>
    </div>
  );
};