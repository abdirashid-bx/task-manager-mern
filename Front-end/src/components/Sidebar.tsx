import React from "react";
import { assets } from "../assets_admin/assets";

export default function Sidebar() {
  const menuItems = [
    { icon: assets.home_icon, label: "Dashboard" },
  
  ];

  return (
    <div className="flex flex-col w-64 border-r border-gray-200 bg-white h-screen shadow-sm">
      {/* Sidebar Header */}
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Admin Panel</h2>
      </div>

      {/* Menu */}
      <ul className="mt-6 space-y-1">
        {menuItems.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-3 py-3 px-6 cursor-pointer hover:bg-blue-50 hover:text-blue-700 transition rounded-lg mx-2"
          >
            <img src={item.icon} alt="" className="w-5 h-5" />
            <p className="text-sm font-medium">{item.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
