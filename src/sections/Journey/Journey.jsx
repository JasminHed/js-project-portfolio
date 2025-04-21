import journeyData from "../../data/journey.json"
import React from "react"
import Card from "../../components/card/Card.jsx"



const Journey = () => {
  return (
    <div>
      {journeyData.journey.map((item) => (
        <Card key={item.id} type="journey" data={item} />
      ))}
    </div>
  )
}



export default Journey