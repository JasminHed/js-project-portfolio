import styled from "styled-components"
import ProfileImage from "../components/Profileimage"

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  margin-top: 20px;

  @media (min-width: 668px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 80px;
    gap: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1600px) {
    padding: 128px;
    gap: 64px;
    max-width: 1280px;
  }
`
const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
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
          Hi there 👋🏼 I'm a web developer with a solid tech toolkit of
          JavaScript, TypeScript, React, Node.js, HTML, CSS – and Wordpress.
        </p>{" "}
        <p>
        My background in HR and freelance health work has equipped me with strong skills in project management and workflow structuring, always with a focus on people.
        </p>
        <p>
        I have collaborated with clients and colleagues from diverse backgrounds and successfully navigated a variety of digital systems.
        </p>
        <p>
        It was through my hands-on experience managing websites with WordPress and working with social media, that sparked my interest in further developing my skills in web development. I am drawn to the tech world for its flexibility, inclusivity and creative freedom. 
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
