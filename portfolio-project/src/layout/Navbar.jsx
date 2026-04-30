import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  // Apply theme to body
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      document.body.style.background = "#0f1418";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.background = "#ffffff";
    }
  }, [dark]);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
      <h1 className="font-bold text-xl">
  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
    Gyana Dewan
  </span>
</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex font-medium items-center gap-8 text-sm text-white">

          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>

          {/* Dark Mode Button */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-4 text-xl hover:scale-110 transition"
          >
            {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
          </button>

        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-4 text-white text-2xl">

          {/* Dark Mode Mobile */}
          <button onClick={() => setDark(!dark)}>
            {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-blue-400" />}
          </button>

          {open ? (
            <FaTimes onClick={() => setOpen(false)} />
          ) : (
            <FaBars onClick={() => setOpen(true)} />
          )}

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center gap-6 py-8 text-white md:hidden">

            <a href="#home" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;