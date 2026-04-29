import { useEffect, useState } from "react";

const educationData = [
  {
    title: "Diploma in Computer Science & Technology",
    institute: "National Polytechnic College",
    time: "2024 - Current",
    desc: "Studying Web Development & Software Engineering.",
  },
  {
    title: "Secondary School Certificate",
    institute: "Khularam Para High School",
    time: "2020 - 2023",
    desc: "A journey of school days filled with learning, growth, friendship, and unforgettable memories. From classroom lessons to playful moments with friends, those days were full of joy, fun, and little mischief truly the most carefree and beautiful phase of life.",
  },
];

export default function Education() {
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".edu-item");

      elements.forEach((el, index) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setVisible((prev) => [...new Set([...prev, index])]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-slate-900 text-white py-10">
      <h2 className="text-3xl md:text-5xl text-center mb-10 font-bold">
        My Education
      </h2>

      <div className="relative max-w-4xl mx-auto">

        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-400 transform -translate-x-1/2 hidden md:block"></div>

        {educationData.map((item, index) => (
          <div
            key={index}
            className={`edu-item mb-8 md:w-1/2 px-4 ${
              index % 2 === 0
                ? "md:pr-8 md:text-right md:ml-0"
                : "md:pl-8 md:ml-auto"
            }`}
          >
            <div
              className={`bg-slate-800 p-5 rounded-xl border border-cyan-400 transition-all duration-700 text-left
              ${
                visible.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-cyan-300">{item.time}</p>
              <p className="mt-2">{item.institute}</p>
              <p className="text-sm mt-2 text-gray-300">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}