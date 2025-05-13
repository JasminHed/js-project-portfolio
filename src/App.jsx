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
      <SkipToLink />
      <GlobalStyle />
      <main id="main" aria-label="Main-Content">
        <Hero aria-label="Header" />
        <Skills/>
        <Project />
        <Tech />
        <Journey />
      </main>
      <Footer aria-label="Footer" />
    </>
  )
}

export default App
