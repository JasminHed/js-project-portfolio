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
    padding: 8px 8px;
  
    h2 {
    text-align: left;
    }
    
`
const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  
`
const Hero = ({ name, title, description, bio, img }) => {
  return (
    <HeroWrapper>
      <HeroContent>

        <h2>I am Jasmin Hedlund</h2>
        <h1>Web Developer</h1>
        <p>Hi there 👋🏼 I'm a web developer with a solid tech toolkit of JavaScript, TypeScript, React, Node.js, HTML and CSS – and a human-centered mindset. My background in recruitment, HR and freelance health work has equipped me with solid experience in project management, structure and organization.
          I've collaborated with clients and colleagues from diverse backgrounds, navigated various digital systems, streamlined routines and improved workflows.
          I've also worked closely with a tech team to communicate user feedback and enhance internal processes.
          My interest in AI led me to the tech world, where I then was drawn to its flexibility, inclusivity and creative freedom – a space where my experience can add value.</p>
        <SocialIcons>
          <a href="https://github.com/JasminHed" target="_blank" rel="noopener noreferrer">
            <img src="/assets/GitHub.svg" alt="GitHub icon" width="24" height="24" />
          </a>
          <a href="https://www.linkedin.com/in/jasmin-hedlund-0b0922242/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/LinkedIn.svg" alt="LinkedIn icon" width="24" height="24" />
          </a>
        </SocialIcons>


      </HeroContent>
      <ProfileImage src="/assets/profile.jpg" alt="Profile picture of Jasmin" />
    </HeroWrapper>
  )
}

export default Hero