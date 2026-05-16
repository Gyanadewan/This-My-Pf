import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Skills from './sections/skills'
import Footer from './layout/Footer'
import Education from './sections/Educations'
function App() {
  return (
    <div>
       <Navbar></Navbar>
       <main>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
         <Skills></Skills>
        <Education></Education>
        <Contact></Contact>
         <Footer></Footer>
       </main>
       <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default App
