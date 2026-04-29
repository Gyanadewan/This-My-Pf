import React from 'react'
import Navbar from './layout/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
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
        <Testimonials></Testimonials>
        <Education></Education>
        <Contact></Contact>
         <Footer></Footer>
       </main>
    </div>
  )
}

export default App
