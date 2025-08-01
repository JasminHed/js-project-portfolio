import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import SkipToLink from "./components/SkipToLink";

import Journey from "./reusabel-sections/Journey.jsx";
import Project from "./reusabel-sections/Projects.jsx";
import Footer from "./static-sections/Footer.jsx";
import Hero from "./static-sections/Hero.jsx";
import Skills from "./static-sections/Skills.jsx";
import Tech from "./static-sections/Tech.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <>
      <SkipToLink />
      <GlobalStyle />
      <main id="main" aria-label="Main-Content">
        <Hero
          aria-label="Header"
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Skills />
        <Project />
        <Tech />
        <Journey />
      </main>
      <Footer aria-label="Footer" />
    </>
  );
};
export default App;
