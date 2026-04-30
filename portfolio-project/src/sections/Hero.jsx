import React from "react";
import Profile from "../assets/image/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center relative pt-20 scroll-mt-24 bg-gray-00 text-white"
    >
      {/* 🔥 Soft Background Glow */}
      <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-3xl rounded-full animate-pulse" />

      <div className="z-10 space-y-6">
        
        {/* ✅ Soft Gradient Profile (LOW INTENSITY) */}
        <div className="p-1 rounded-full bg-gradient-to-r from-purple-400/50 to-pink-400/40 inline-block">
          <img
            src={Profile}
            alt="profile"
            className="w-80 h-80 md:w-80 md:h-80 rounded-full object-cover bg-gray-950"
          />
        </div>

        {/* ✅ Gradient Name */}
        <h1 className="text-2xl md:text-5xl font-bold">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Gyana Ratan Dewan
          </span>
        </h1>

        {/* ✅ Bio */}
        <p className="text-gray-400 max-w-xl mx-auto px-2">
          I'm a{" "}
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-semibold">
            Front-End Developer
          </span>{" "}
          focused on building clean and modern web interfaces.
        </p>

        {/* ✅ Button */}
       <a
    href="#projects"
    className="relative inline-block px-6 py-3 rounded-full font-semibold text-white overflow-hidden group"
   >
    {/* Background layer */}
   <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 transition-opacity duration-300 group-hover:opacity-0"></span>

    {/* Hover alternative background (optional dark/transparent feel) */}
    <span className="absolute inset-0 bg-gray-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

     {/* Text */}
     <span className="relative z-10 group-hover:text-white">
      View Projects
      </span>
     </a>
      </div>
    </section>
  );
}

export default Hero;