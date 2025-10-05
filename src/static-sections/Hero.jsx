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
            Hello there, I am a Web Developer with experience and passion for
            accessibility. Looking for opportunities remote or hybrid within
            development, focus on frontend but willing and curious to learn
            backend as well.
          </p>

          <p>
            With a background mainly in HR and recruitment, I have spent over a
            decade leading projects, working and supporting people, improving
            workflows and creating clear documentation and user guides.
            Alongside this, I have worked as a yoga and wellness freelancer for
            more than 13 years, an experience that has strengthened my
            adaptability, creativity and entrepreneurial mindset.
          </p>

          <p>
            In recent years, I’ve shifted my focus toward web development and
            accessibility — building, designing and optimizing websites and
            digital tools with attention to both user experience and inclusion.
            Today, I combine my technical skills with my experience in
            people-centered work to create digital solutions that are both
            functional and human first.
          </p>

          <p>
            I am teachable, enthusiastic and comfortable taking initiative to
            move things forward.
          </p>

          <p>
            I am drawn to web development because it combines practicality with
            creativity and is a continous journey of learning.
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
