import journeyData from "../data/journey.json"
import React from "react"
import Card from "../components/Card.jsx"
import CardWrapper from "../styles/CardWrapper.jsx"
import DesktopCarousel from "../components/DesktopCarousel.jsx"
import styled from "styled-components"

const Journey = () => {
  return (
    <section>
      <h2>Projects</h2>
      
     
      <CardWrapper>
        {journeyData.journey.map((item) => (
          <Card key={item.id} type="journey" data={item} />
        ))}
      </CardWrapper>
      
      
      <DesktopCarousel>
        {journeyData.journey.map((item) => (
          <Card key={item.id} type="journey" data={item} />
        ))}
      </DesktopCarousel>
    </section>
  )
}


export default Journey



/*const Journey = () => {
  return (
    <>
      <section>
        <h2>Journey</h2>
        <CardWrapper>
          {journeyData.journey.map((item) => (
            <Card key={item.id} type="journey" data={item} />
          ))}
        </CardWrapper>
      </section>
    </>
  )
}*/

