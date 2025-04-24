import journeyData from "../data/journey.json"
import React from "react"
import Card from "../components/Card.jsx"
import styled from "styled-components"

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;


`

const Journey = () => {
  return (
    <SectionWrapper>
      {journeyData.journey.map((item) => (
        <Card key={item.id} type="journey" data={item} />
      ))}
    </SectionWrapper>
  )
}



export default Journey