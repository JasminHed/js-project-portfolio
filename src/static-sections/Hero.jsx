import React from "react";
import styled from "styled-components";

import ProfileImage from "../components/Profileimage";

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

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 64px;

  @media (min-width: 668px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    gap: 20px;
    margin-bottom: 64px;
  }

  @media (min-width: 1024px) {
    padding: 60px;
    gap: 64px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
  padding: 16px;

  p {
    letter-spacing: 0.3px;
    margin-top: 20px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

const Hero = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <HeroWrapper id="home">
        <DarkModeButton onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </DarkModeButton>

        <HeroContent>
          <h1>Portfolio of Jasmin Hedlund</h1>

          <p>
            Hello there, I am a Web developer (frontend focus) with an
            entrepreneurial mindset, passionate about accessibility, health and
            meaningful digital solutions — especially within the nonprofit
            sector, education and social impact.
          </p>

          <p>
            My background is in HR, administration and recruitment — primarily
            within the non-profit sector. In these roles, I led projects,
            improved workflows, digital communication and implemented digital
            tools. I also created clear documentation such as guides and
            manuals.
          </p>

          <p>In parallel, I freelance in health, yoga and ayurveda.</p>

          <p>
            Understanding human behavior is at the core of how I approach
            development. My time in people-focused roles has taught me to adapt
            quickly and stay proactive. I am teachable, enthusiastic and
            comfortable taking initiative to move things forward.
          </p>

          <p>
            I am drawn to web development because it combines practicality with
            creativity.
          </p>

          <SocialIcons>
            <a
              href="https://github.com/JasminHed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/GitHub.svg"
                alt="Visit Jasmins GitHub"
                width="24"
                height="24"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jasmin-hedlund-0b0922242/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/LinkedIn.svg"
                alt="Visit Jasmins LinkedIn"
                width="24"
                height="24"
              />
            </a>
          </SocialIcons>
        </HeroContent>
        <ProfileImage
          src="/assets/profile-optimized.webp"
          alt="Profile picture in round format,black and white, of a woman with dark long hair,white skin,brown eyes, somewhat round face with a smile, a black sweater with a background of grey curtains. It is a formal setting."
          width="200"
          height="200"
          loading="lazy"
        />
      </HeroWrapper>
    </>
  );
};

export default Hero;
