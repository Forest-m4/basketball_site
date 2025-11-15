import React from "react";

export const NavbarCart = () => {
  return (
    <div className="flex items-center gap-1 font-bold flex-shrink-0">
      <img src="/images/ui/store.png" alt="Корзина" className="w-[25px] h-auto cursor-pointer" />
      <span>0 $</span>
    </div>
  );
};