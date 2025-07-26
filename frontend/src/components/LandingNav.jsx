import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../images/logos/logo.png";
import { HiMenu, HiX } from 'react-icons/hi';

const LandingNavbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="relative z-50 flex items-center justify-center py-4">
      {/* Glossy Pill Background */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-full max-w-5xl h-[72px] bg-[#000000dd] rounded-full backdrop-blur-md shadow-2xl border border-white/10"></div>
      </div>

      {/* Navbar Container */}
      <div className="relative w-full max-w-5xl px-4 md:px-10 flex items-center justify-between text-white z-10">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-[110px] sm:w-[120px] object-contain hover:scale-105 transition-transform duration-300"
            style={{ marginTop: '-2px' }}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link
            to="/"
            className={`relative px-2 py-1 transition-all duration-200 ${
              isActive("/") ? "text-white font-semibold drop-shadow-[0_0_5px_white]" : "text-gray-300 hover:text-white hover:font-semibold"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`relative px-2 py-1 transition-all duration-200 ${
              isActive("/about") ? "text-white font-semibold drop-shadow-[0_0_5px_white]" : "text-gray-300 hover:text-white hover:font-semibold"
            }`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`relative px-2 py-1 transition-all duration-200 ${
              isActive("/services") ? "text-white font-semibold drop-shadow-[0_0_5px_white]" : "text-gray-300 hover:text-white hover:font-semibold"
            }`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`relative px-2 py-1 transition-all duration-200 ${
              isActive("/contact") ? "text-white font-semibold drop-shadow-[0_0_5px_white]" : "text-gray-300 hover:text-white hover:font-semibold"
            }`}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className={`relative px-4 py-1 rounded-full bg-gradient-to-r from-[#ffffff20] to-[#ffffff10] border border-white/20 transition duration-200 ${
              isActive("/login") ? "drop-shadow-[0_0_5px_white]" : "hover:bg-white/20"
            }`}
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white text-3xl">
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-[100%] left-0 w-full px-4 py-6 bg-[#000000dd] backdrop-blur-md flex flex-col items-center gap-5 text-white font-medium z-40 rounded-b-2xl shadow-lg transition-all duration-300 md:hidden">
          <Link to="/" onClick={() => setOpen(false)} className={`${isActive("/") ? "text-blue-400 font-bold drop-shadow-[0_0_5px_white]" : "hover:text-blue-300"}`}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className={`${isActive("/about") ? "text-blue-400 font-bold drop-shadow-[0_0_5px_white]" : "hover:text-blue-300"}`}>About</Link>
          <Link to="/services" onClick={() => setOpen(false)} className={`${isActive("/services") ? "text-blue-400 font-bold drop-shadow-[0_0_5px_white]" : "hover:text-blue-300"}`}>Services</Link>
          <Link to="/contact" onClick={() => setOpen(false)} className={`${isActive("/contact") ? "text-blue-400 font-bold drop-shadow-[0_0_5px_white]" : "hover:text-blue-300"}`}>Contact</Link>
          <Link to="/login" onClick={() => setOpen(false)} className={`px-4 py-2 border border-white rounded-full transition duration-200 ${
            isActive("/login") ? "bg-white/30 drop-shadow-[0_0_5px_white]" : "bg-white/20 hover:bg-white/30"
          }`}>Login</Link>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;
