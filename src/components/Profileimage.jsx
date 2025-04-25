import styled from "styled-components"

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 8%; //center 50%, move up from top 8% s head shows, good for footer
  flex-shrink: 0; // good for hero, made it stay in size
`

export default ProfileImage
