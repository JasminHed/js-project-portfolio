import styled from "styled-components"
import ProfileImage from "../../components/Profileimage"


const HeroWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 128px 128px 64px 128px;
  gap:64px;
  max-width: 1280px;
  margin: 0 auto;

`
const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 600px;
    
`
const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  
`
const HeroImage = styled(ProfileImage)`
align-item: flex-end;

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
            <img src="/assets/GitHub.svg" alt="GitHub icon" />
          </a>
          <a href="https://www.linkedin.com/in/jasmin-hedlund-0b0922242/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/LinkedIn.svg" alt="LinkedIn icon" />
          </a>
        </SocialIcons>


      </HeroContent>
      <HeroImage src="/assets/profile.jpg" alt="Profile picture of Jasmin" />
    </HeroWrapper>
  )
}

export default Hero