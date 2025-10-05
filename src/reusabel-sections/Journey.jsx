import React from "react"

import Card from "../components/Card.jsx"
import DesktopCarousel from "../components/DesktopCarousel.jsx"
import journeyData from "../data/journey.json"
import CardWrapper from "../styles/CardWrapper.jsx"

const Journey = () => {
  return (
    <section id="journey">
      <h2>Journey</h2>
      
     
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




