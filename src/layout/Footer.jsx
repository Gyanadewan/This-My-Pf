import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <div>
          <footer className="bg-[#0b0f14] text-gray-300 py-10 mt-20 border-t border-gray-800">

      <div className="container mx-auto px-6 flex flex-col items-center text-center gap-6">

        {/* Social Icons */}
        <div className="flex gap-5 text-2xl">

          <a href="https://www.linkedin.com/in/gyana-dewan-144827369" target="_blank" className="hover:text-blue-500 hover:scale-110 transition">
            <FaLinkedin />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61589062760823" target="_blank" className="hover:text-blue-600 hover:scale-110 transition">
            <FaFacebook />
          </a>
        
         <a href=" https://www.instagram.com/gyanadewan?igsh=ZWc4eHVhcHAyOHJ2&utm_source=ig_contact_invite" target="_blank" className="hover:text-pink-500 hover:scale-110 transition">
            <FaInstagram />
          </a>

          <a href="https://whatsapp.com/dl/" target="_blank" className="hover:text-green-500 hover:scale-110 transition">
            <FaWhatsapp />
          </a>

          <a href="https://x.com/gyana_dewa25442" target="_blank" className="hover:text-sky-400 hover:scale-110 transition">
            <FaTwitter />
          </a>

        </div>

        {/* Bottom Text */}
        <p className="text-xs text-gray-500 mt-4">
         Copyright ©  {new Date().getFullYear()} All right reserved by Gyana Ratan Dewan
        </p>

      </div>

    </footer>
    </div>
  )
}

export default Footer
