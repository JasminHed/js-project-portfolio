import styled from "styled-components"
import ProfileImage from "../components/Profileimage"



const FooterWrapper = styled.footer` 
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 64px 24px;
  align-items: center;
  text-align: center;
  background-color: #D3C7DF;
  width: 100%;
  max-width: 100vw; //Keep it within page

  @media (min-width: 668px) {
    padding: 64px;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  @media (min-width: 1024px) {
    padding: 64px 128px 128px 128px; //as per Figma design
  }
    `

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;

  @media (min-width: 668px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  `

const FooterText = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;

`
const SocialIcons = styled.div` 
  display: flex;
  gap: 16px;
  margin-top: 8px;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <ProfileImage src="/assets/profile.jpg" alt="Profile picture of Jasmin" />
        <FooterText>
          <h2>Let´s Talk</h2>
          <p>Jasmin Hedlund</p>
          <p>073 563 1237</p>
          <p><a href="mailto:jasminhedlund@gmail.com">jasminhedlund@gmail.com</a></p>

          <SocialIcons>
            <a href="https://github.com/JasminHed" target="_blank" rel="noopener noreferrer">
              <img src="/assets/GitHub.svg" alt="GitHub icon" />
            </a>
            <a href="https://www.linkedin.com/in/jasmin-hedlund-0b0922242/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/LinkedIn.svg" alt="LinkedIn icon" />
            </a>
          </SocialIcons>

        </FooterText>

      </FooterContent>
    </FooterWrapper>




  )
}

export default Footer