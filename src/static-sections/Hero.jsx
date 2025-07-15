import React from "react";
// Bra att importera React (kan behövas beroende på version)
import styled from "styled-components";

import ProfileImage from "../components/Profileimage";

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

  h2 {
    text-align: left;
  }

  p {
    letter-spacing: 0.3px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

const Hero = () => {
  return (
    <>
      <HeroWrapper id="home">
        <HeroContent>
          <h1>I am Jasmin Hedlund</h1>
          <h2>Web Developer</h2>
          <p>
            Hello there, I am a Web developer with an entrepreneurial mindset,
            passionate about accessibility, health and meaningful digital
            solutions — especially within the nonprofit sector, education and
            social impact.
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
          alt="Profile picture of Jasmin"
          width="200"
          height="200"
          loading="lazy"
        />
      </HeroWrapper>
    </>
  );
};

export default Hero;
