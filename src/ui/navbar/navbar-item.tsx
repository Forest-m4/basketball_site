import React from "react";

interface INavbarItemProps {
  text: string;
  href?: string;
}

export const NavbarItem: React.FC<INavbarItemProps> = ({ text, href = "#" }) => {
  return (
    <li className="nav-item">
      <a className="text-[14px] font-medium text-gray-800 hover:text-blue-700" href={href}>
        {text}
      </a>
    </li>
  );
};