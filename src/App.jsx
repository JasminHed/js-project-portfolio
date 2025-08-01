import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";

import Journey from "./reusabel-sections/Journey.jsx";
import Project from "./reusabel-sections/Projects.jsx";
import Footer from "./static-sections/Footer.jsx";
import Hero from "./static-sections/Hero.jsx";
import Skills from "./static-sections/Skills.jsx";
import Tech from "./static-sections/Tech.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";

const DarkModeButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  padding: 6px 12px;
  border: 1px solid var(--color-text);
  background: transparent;
  color: var(--color-text);
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: 3px solid var(--color-secondary);
    outline-offset: 4px;
  }
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  //this follows the users system settings, if they have dark mode on it will switch
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);
  }, []);

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
      <header>
        <DarkModeButton onClick={toggleDarkMode} aria-pressed={darkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </DarkModeButton>
      </header>
      <GlobalStyle />
      <main id="main" aria-label="Main-Content">
        <Hero />
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
