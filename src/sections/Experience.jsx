import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

function Experience() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-5xl" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400 text-5xl" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
    { name: 'Python', icon: <FaPython className="text-green-400 text-5xl" /> },
  ]

  return (
    <section id="experience" className="py-24 px-6 bg-[#0f1418]">
      
      <h2 className="text-4xl font-bold text-center mb-4">
        My <span className="text-primary">Skills</span>
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Technologies I work with
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 1 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-900/60 border border-gray-700 rounded-2xl p-8 flex flex-col items-center hover:border-primary transition"
          >
            {skill.icon}
            <p className="mt-4 font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>

    </section>
  )
}

export default Experience