import React from "react";
import Profile from "../assets/image/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center relative pt-20 scroll-mt-24 bg-gray-950 text-white"
    >
      {/* 🔥 Soft Background Glow */}
      <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-3xl rounded-full animate-pulse" />

      <div className="z-10 space-y-6">
        
        {/* ✅ Soft Gradient Profile (LOW INTENSITY) */}
        <div className="p-[2px] rounded-full bg-gradient-to-r from-purple-400/50 to-pink-400/40 inline-block">
          <img
            src={Profile}
            alt="profile"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover bg-gray-950"
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
        <p className="text-gray-400 max-w-xl mx-auto">
          I'm a{" "}
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-semibold">
            Front-End Developer
          </span>{" "}
          focused on building clean and modern web interfaces.
        </p>

        {/* ✅ Button */}
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-semibold hover:scale-105 hover:shadow-lg transition duration-100"
        >
          View Projects
        </a>

      </div>
    </section>
  );
}

export default Hero;