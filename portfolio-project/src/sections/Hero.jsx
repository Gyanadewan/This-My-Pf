import React from "react";
import Profile from "../assets/image/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center relative pt-20 scroll-mt-24"
    >
      {/* Floating BG glow */}
      <div className="absolute w-96 h-96 bg-green-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="z-10 space-y-6">
        <img
          src={Profile}
          alt="profile"
          className="w-40 h-40 md:w-52 md:h-52 mx-auto rounded-full object-cover 
          border-4 border-transparent 
          bg-gradient-to-r from-purple-500 to-pink-500 p-1 shadow-lg"
        />

        <h1 className="text-xl md:text-5xl font-bold">
          Hi, I'm <span className="text-green-400">Gyana Ratan Dewan</span>
        </h1>

        <p className="text-gray-400 max-w-md mx-auto">
          I build modern, fast & animated web applications using React &
          Tailwind CSS.
        </p>

        <a
          href="#projects"
          className="px-6 py-3 bg-green-500 rounded-full text-black font-semibold hover:scale-105 transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;