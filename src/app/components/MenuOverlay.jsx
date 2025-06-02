import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <ul className="flex flex-col py-6 items-center space-y-4 bg-[#121212] text-white">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            onClick={onClose} // optional: close the menu on link click
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
