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
    border: 2px solid var(--secondary-color);
  }
`

const SkipToLink = () => {
  return (
    <SkipLink href="#main" tabIndex="0">
      Skip to main content
    </SkipLink>
  )
}

export default SkipToLink
