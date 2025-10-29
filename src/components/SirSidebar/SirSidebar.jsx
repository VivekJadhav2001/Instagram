import React from 'react'
import { Home, Search, Compass, Film, MessageCircle, Heart, PlusSquare, User, Menu } from "lucide-react";
function SirSidebar() {
  const menuItems = [
    { icon: <Home size={22} />, label: "Home" },
    { icon: <Search size={22} />, label: "Search" },
    { icon: <Compass size={22} />, label: "Explore" },
    { icon: <Film size={22} />, label: "Reels" },
    { icon: <MessageCircle size={22} />, label: "Messages", badge: 9 },
    { icon: <Heart size={22} />, label: "Notifications" },
    { icon: <PlusSquare size={22} />, label: "Create" },
    { icon: <User size={22} />, label: "Profile" },
  ];

  return (
    <div className="flex flex-col h-full justify-between px-4 py-6 font-bold text-xl" >
      {/* Logo */}
      <h1 className="text-4xl font-semibold mb-8" style={{ fontFamily: "cursive" }}>
        Instagram
      </h1>

      {/* Menu */}
      <nav className="flex flex-col gap-5">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 text-gray-300 hover:text-white cursor-pointer transition-colors"
          >
            {item.icon}
            <span className="text-[15px]">{item.label}</span>
            {item.badge && (
              <span className="ml-auto text-xs bg-pink-600 rounded-full px-2 py-1px">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="flex flex-col gap-4 pt-6 border-t border-gray-800">
        <div className="flex items-center gap-3 cursor-pointer hover:text-white text-gray-300">
          <Menu size={20} />
          <span>More</span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:text-white text-gray-300">
          <User size={20} />
          <span>Also from Meta</span>
        </div>
      </div>
    </div>
  );
}

export default SirSidebar