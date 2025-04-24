import styled from "styled-components"
import ProfileImage from "../../components/Profileimage"




const FooterWrapper = styled.footer`
 display: flex;
 height: 300px;
 padding: 64px 128px 128px 128px;
 align-self: stretch;
 align-items: center;
 background-color: #D3C7DF;

`

const FooterContent = styled.div`
 display: flex;
  gap: 64px;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

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
const FooterImage = styled(ProfileImage)`
margin-top: 20px;

`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterImage src="/assets/profile.jpg" alt="Profile picture of Jasmin" />
        <FooterText>
          <h2>Let´s Talk</h2>
          <p>Jasmin Hedlund</p>
          <p>073 563 1237</p>
          <p>Email: <a href="mailto:jasminhedlund@gmail.com">jasminhedlund@gmail.com</a></p>

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