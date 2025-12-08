import React from "react";
import { NavItem } from "./navItems";


interface NavigationPillsProps {
  activeItem: NavItem;
  onSelect: (item: NavItem) => void;
}

export const NavigationPills: React.FC<NavigationPillsProps> = ({
  activeItem,
  onSelect,
}) => {
  const items = [NavItem.ABOUT, NavItem.HISTORY, NavItem.NEWSROOM];

  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {items.map((item) => (
        <button
          key={String(item)}
          onClick={() => onSelect(item)}
          className={`
            px-6 py-2 rounded-full border text-sm font-medium transition-colors duration-200
            ${
              activeItem === item
                ? "bg-black text-white border-black"
                : "bg-white text-gray-600 border-gray-300 hover:border-gray-800"
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
