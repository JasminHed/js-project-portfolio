import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

import LandingPage from "./components/LandingPage.jsx";
import SkipToLink from "./components/SkipToLink";
import FreelanceProjects from "./reusabel-sections/FreelanceProjects.jsx";
import Journey from "./reusabel-sections/Journey.jsx";
import Project from "./reusabel-sections/Projects.jsx";
import Footer from "./static-sections/Footer.jsx";
import Hero from "./static-sections/Hero.jsx";
import Skills from "./static-sections/Skills.jsx";
import Tech from "./static-sections/Tech.jsx";
import GlobalStyle from "./styles/GlobalStyle.jsx";

const App = () => {
  return (
    <>
      <Router>
        <SkipToLink />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/schoolprojects"
            element={
              <>
                <main id="main" aria-label="Main-Content">
                  <Hero aria-label="Header" />
                  <Skills />
                  <Project />
                  <Tech />
                  <Journey />
                </main>
                <Footer aria-label="Footer" />
              </>
            }
          />
          <Route
            path="/freelanceprojects"
            element={
              <>
                <main id="main" aria-label="Main-Content">
                  <Hero aria-label="Header" />
                  <FreelanceProjects />
                </main>
                <Footer aria-label="Footer" />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};
export default App;
