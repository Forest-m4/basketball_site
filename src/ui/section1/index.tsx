import React from "react";
import { PromoTextBlock } from "./promo-text-block";
import { PromoCard } from "./promo-card";

export const Section1 = () => {
  return (
    <section className="section1">
      <div className="flex gap-[20px] pt-[40px] px-[70px] items-start">
        <PromoTextBlock />
        <PromoCard />
      </div>    
    </section>
  );
};