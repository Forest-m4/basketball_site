import React from "react";
import { NavbarLogo } from "./navbar-logo";
import { NavbarItem } from "./navbar-item";
import { NavbarPhone } from "./navbar-phone";
import { NavbarButton } from "./navbar-button";
import { NavbarCart } from "./navbar-cart";

export const Navbar = () => {
  return (
    <header className="bg-white shadow py-2">
      <div className="container mx-auto px-5 flex items-center gap-10">
        <NavbarLogo />

        <ul className="flex gap-12 items-center flex-grow justify-center list-none p-0 m-0">
          <NavbarItem text="Мячи" />
          <NavbarItem text="Кроссовки" />
          <NavbarItem text="Майки" />
          <NavbarItem text="Шорты" />
          <NavbarItem text="..." />
          <NavbarPhone />
          <NavbarButton />
        </ul>

        <NavbarCart />
      </div>
    </header>
  );
};