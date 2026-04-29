import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="py-32 container mx-auto px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title */}
      <motion.h2
        className="text-3xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Text */}
      <motion.p
        className="text-gray-400 text-xl max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
      >
        Hi, I am Gyana Ratan Dewan. I am currently a 3rd-year student at
        National Polytechnic College, studying Computer Science and
        Technology. I am passionate about Web Development and Software
        Engineering, and I am continuously learning new technologies, skills,
        and libraries to improve myself.
        <br />
        <br />
        Outside of academics, I enjoy playing chess and football with my
        friends in my free time. My goal is to become a skilled and
        professional developer in the future.
      </motion.p>
    </motion.section>
  );
}

export default About;