import styled from "styled-components"


const CardWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 10px;


  @media (min-width: 668px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
    margin-bottom: 15px;
  }

@media (min-width: 1024px) and (max-width: 1600px) {
  display: none;
}



  
`

 

export default CardWrapper