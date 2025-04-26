import React, { useState } from "react"
import styled from "styled-components"

const CarouselContainer = styled.div`
  display: none; //Not showin on small screens
  overflow: hidden; 
  
  @media (min-width: 1024px) {
    display: block;
  }
`

// Animation
const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out; // Softer transition
  transform: translateX(-${props => props.currentCard * 100}%);
`

// Renamed from Card to CardGroup to avoid name conflict
const CardGroup = styled.div`
  flex: 0 0 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;
`
//Styling the dots
const DotButton = styled.button`
  width: 15px;
  height: 15px;
  gap: 25px;
  border-radius: 50%;
  background-color: ${props => props.isActive ? 'var(--color-primary)' : '#ccc'};
  margin: 0 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease; // Soft transition
`

const DesktopCarousel = ({ children }) => {
  const [currentCard, setCurrentCard] = useState(0)
  
  const childrenArray = React.Children.toArray(children)
  const cards = [] 
  
  for (let i = 0; i < childrenArray.length; i += 3) {
    cards.push(childrenArray.slice(i, i + 3))
  }
  
  return (
    <CarouselContainer>
      <SlideContainer currentCard={currentCard}>
        {cards.map((cardItems, index) => (
          <CardGroup key={index}>
            {cardItems}
          </CardGroup>
        ))}
      </SlideContainer>
      
      <Dots>
        {cards.map((_, index) => (
          <DotButton 
            key={index}
            isActive={index === currentCard}
            onClick={() => setCurrentCard(index)}
            aria-label={`Show card ${index + 1}`}
          />
        ))}
      </Dots>
    </CarouselContainer>
  )
}

export default DesktopCarousel