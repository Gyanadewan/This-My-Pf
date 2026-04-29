import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center md:py-32 py-20 container mx-auto px-6 text-center"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-white mb-8">
        Projects
      </h2>

      {/* Card */}
      <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-md shadow-lg">

        <h3 className="text-2xl font-semibold text-white mb-4">
          Work in Progress
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          I’m currently in the learning and building phase of my development journey. While I haven’t completed any projects yet, I’m actively working on improving my skills and preparing real-world projects.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition"
          >
            Next →
          </a>

          <a
            href="#about"
            className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            Scroll Up ↑
          </a>

        </div>
      </div>
    </section>
  );
}

export default Projects;