import journeyData from "../data/journey.json"
import React from "react"
import Card from "../components/Card.jsx"
import styled from "styled-components"


const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 10px;

@media (min-width: 668px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 28px;
    margin-bottom: 15px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-bottom: 20px;
  }

`

const Journey = () => {
  return (
    <>
      <h2>Journey</h2>
      <SectionWrapper>
        {journeyData.journey.map((item) => (
          <Card key={item.id} type="journey" data={item} />
        ))}
      </SectionWrapper>

    </>
  )
}



export default Journey