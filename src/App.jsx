import React from "react"
import GlobalStyle from "./styles/GlobalStyle.jsx"
import SkipToLink from "./components/SkipToLink"
import Hero from "./static-sections/Hero/Hero.jsx"
import Skills from "./static-sections/Skills/Skills.jsx"
import Project from "./reusabel-sections/Projects/Projects.jsx"
import Tech from "./static-sections/Tech/Tech.jsx"
import Journey from "./reusabel-sections/Journey/Journey.jsx"
import Footer from "./static-sections/Footer/Footer.jsx"


const App = () => {
  return (
    <>
      <GlobalStyle />
      <SkipToLink />
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





