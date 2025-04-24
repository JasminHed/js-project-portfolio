import styled from "styled-components"

const SkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 16px;
  padding: 8px 16px;
  z-index: 100;
  text-decoration: none;
  transition: top 0.3s;
  outline: none;

  &:focus {
    top: 16px;
  }
`

const SkipToLink = () => {
  return (
    <SkipLink href="#main">
      Skip to main content
    </SkipLink>
  )
}

export default SkipToLink
