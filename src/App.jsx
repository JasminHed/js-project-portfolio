import React from "react"
import GlobalStyle from "./styles/GlobalStyle.jsx"
import SkipToLink from "./components/SkipToLink"
import Hero from "./static-sections/Hero.jsx"
import Skills from "./static-sections/Skills.jsx"
import Project from "./reusabel-sections/Projects.jsx"
import Tech from "./static-sections/Tech.jsx"
import Journey from "./reusabel-sections/Journey.jsx"
import Footer from "./static-sections/Footer.jsx"


const App = () => {
  return (
    <>
      <GlobalStyle />
      <SkipToLink />
      <main id="main">
        <Hero />
        <Skills />
        <Project />
        <Tech />
        <Journey />
      </main>
      <Footer />

    </>

  )
}

export default App





