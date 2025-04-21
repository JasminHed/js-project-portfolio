import React from "react"
import "./index.css"
import Hero from "./static-sections/Hero/Hero.jsx"
import Skills from "./static-sections/Skills/Skills.jsx"
import Project from "./sections/Projects/Projects.jsx"
import Tech from "./static-sections/Tech/Tech.jsx"
import Journey from "./sections/Journey/Journey.jsx"
import Footer from "./static-sections/Footer/Footer.jsx"


const App = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Project />
      <Tech />
      <Journey />
      <Footer />

    </>

  )
}

export default App





