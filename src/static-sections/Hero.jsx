import React from "react";
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

const Hero = () => {
  return (
    <>
      <HeroWrapper id="home">
        <HeroContent>
          <h1>Portfolio of Jasmin Hedlund</h1>

          <p>
            Hello there, I am a Web developer (frontend focus) with an
            entrepreneurial mindset, passionate about accessibility, health and
            meaningful digital solutions — especially within social impact
            companies.
          </p>

          <p>
            My background is in HR, administration and recruitment — primarily
            within the non-profit sector. In these roles, I led projects,
            improved workflows, digital communication and implemented digital
            tools. I also created clear documentation such as guides and
            manuals. I also freelance within yoga and ayurveda since 2015.
          </p>

          <p>
            Now I combine communication, digital workflows, people and client
            focus, structure and organisation as well as hands-on coding with
            content work, accessibility and project management
          </p>

          <p>
            I am teachable, enthusiastic and comfortable taking initiative to
            move things forward.
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
          alt="Profile picture in black and white of Jasmin Hedlund smiling with dark hair and brown eyes."
          width="200"
          height="200"
          loading="lazy"
        />
      </HeroWrapper>
    </>
  );
};

export default Hero;
