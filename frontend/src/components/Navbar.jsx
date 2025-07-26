import React from 'react';
import logo from "../images/logos/logo.png";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const linkClasses = (path) =>
    `relative transition-all duration-300 ${
      location.pathname === path
        ? "text-blue-400 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-blue-400 after:shadow-md"
        : "hover:text-blue-400"
    }`;

  return (
    <div className="flex items-center justify-center py-4 bg-[#0f0e0e] shadow-md shadow-[#0f0f0f]">
      <div className="w-[95%] md:w-[90%] bg-[#1a1a1a] rounded-full px-6 py-2 flex items-center justify-between border border-[#333] shadow-inner shadow-black/50">
        
        {/* Left Navigation Links */}
        <div className="hidden md:flex gap-6 text-white text-sm tracking-wide">
          <Link to="/home" className={linkClasses("/home")}>Playground</Link>
          <Link to="/dsa" className={linkClasses("/dsa")}>DSA</Link>
        </div>

        {/* Center Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="CodeSanctum Logo"
            className="w-[120px] object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg"
          />
        </Link>

        {/* Right Navigation Links + Logout */}
        <div className="flex items-center gap-4 text-white text-sm tracking-wide">
          <Link to="/roadmap" className={`hidden md:block ${linkClasses("/roadmap")}`}>Roadmap</Link>
          <Link to="/contact" className={`hidden md:block ${linkClasses("/contact")}`}>Contact</Link>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("isLoggedIn");
              window.location.reload();
            }}
            title="Logout"
            className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 w-10 h-10 rounded-full flex items-center justify-center text-white text-lg transition-all duration-300 shadow-lg hover:shadow-red-500/50"
          >
            ⎋
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
