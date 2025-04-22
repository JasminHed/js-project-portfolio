import journeyData from "../../data/journey.json"
import React from "react"
import Card from "../../components/card/Card.jsx"
import style from "styled-components"

const SectionWrapper = style.section`
display: flex;
flex-direction: row;
gap: 64px;
justify-content: center;

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