import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter ,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      alert("Please fill all fields ⚠️");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm("service_gggay91", "template_9hd6pug", form.current, {
        publicKey: "KtyDf98IddMCFEF_j",
      })
      .then(() => {
        // alert("Message sent successfully ✅");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-32 container mx-auto px-6 text-white">

      <h2 className="text-3xl  font-bold mb-10 text-center">
        Contact Me
      </h2>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* LEFT - CONTACT INFO */}
        <div className="w-full md:w-1/2 border-2 border-cyan-400 rounded-2xl p-8 shadow-lg bg-gray-950 hover:scale-[1.02] transition duration-300">

          <h2 className="text-2xl font-semibold text-center mb-8">
            Contact Information
          </h2>

          <div className="flex items-start gap-4 mb-6">
            <FaPhone className="text-2xl mt-1" />
            <div>
              <p className="text-cyan-400">Phone/WhatsApp</p>
              <p className="font-semibold">+8801856511849</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <FaEnvelope className="text-2xl mt-1" />
            <div>
              <p className="text-cyan-400">Email</p>
              <p className="font-semibold">gyanadewan1@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-8">
            <FaMapMarkerAlt className="text-2xl mt-1" />
            <div>
              <p className="text-cyan-400">Location</p>
              <p className="font-semibold">Chattogram, Bangladesh</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Find Me On</h3>


         <div className="flex gap-5 text-2xl">
         <a href="https://www.facebook.com/profile.php?id=61589062760823" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="hover:text-blue-500 cursor-pointer" />
        </a>

         <a href="https://whatsapp.com/dl/" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
         </a>

         <a href="https://www.instagram.com/gyanadewan?igsh=ZWc4eHVhcHAyOHJ2&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        </a>

         <a href="https://github.com/Gyanadewan" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:text-gray-400 cursor-pointer" />
       </a>

     <a href="https://www.linkedin.com/in/gyana-dewan-144827369" target="_blank" rel="noopener noreferrer">
     <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
    </a>
         
     <a href="https://x.com/gyana_dewa25442" target="_blank" className="hover:text-sky-400 hover:scale-110 transition">
        <FaTwitter />
           </a>
  </div>
        </div>

        {/* RIGHT - FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 border-2 border-cyan-400 rounded-2xl p-8 shadow-lg bg-gray-950 flex flex-col gap-4 hover:scale-[1.02] transition duration-300"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            className="p-3 rounded bg-gray-900 border border-gray-700"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            className="p-3 rounded bg-gray-900 border border-gray-700"
          />

          <textarea
            name="message"
            placeholder="Message"
            className="p-3 rounded bg-gray-900 border border-gray-700 h-32"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-green-500 py-3 rounded font-semibold hover:scale-105 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;