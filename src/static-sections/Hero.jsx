import styled from "styled-components"
import ProfileImage from "../components/Profileimage"

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px;
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
`
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
`
const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`
const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <h1>I am Jasmin Hedlund</h1>
        <h2>Web Developer</h2>
        <p>
  Hello there, I'm a web developer with a solid tech toolkit of
  React, TypeScript, JavaScript, Node.js, HTML, CSS – and WordPress.
</p>

<p>
Before starting my journey in web development, I worked in HR and recruitment — a field where I led recruitment projects, improved workflows, and implemented digital systems to streamline everyday processes. I’ve built routines from scratch, set up internal structures, and started a recruitment network to encourage knowledge sharing and collaboration.
</p>

<p>
  In parallel, I ran my own business as a freelance health and yoga instructor. I managed clients, coordinated events, produced content, and handled both planning and communication. It taught me how to stay organized, work independently and adapt to different contexts.
</p>

<p>
Understanding human behavior is a core part of how I work. My time in people-focused roles has sharpened my ability to adapt quickly, stay proactive, and work well with all kinds of people – whether in a team or with clients.
</p>

<p>
My passion areas include purpose driven tech and digital accessibility. I am drawn to the web development field for its flexibility, inclusivity and creative freedom.
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
  )
}

export default Hero
