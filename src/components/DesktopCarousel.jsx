import React, { useState } from "react"
import styled from "styled-components"

//main container that holds everything
const CarouselContainer = styled.div` 
  display: none;
  position: relative;
  margin: 2rem 0;
  overflow: visible;
  width: 100%;
  
  @media (min-width: 1024px) and (max-width: 1600px) {
    display: block;
  }

`

const CarouselTrack = styled.div`
  display: flex;
  gap: 32px;
  padding: 0.5rem 0;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.$slide}px);
`

const CarouselItem = styled.div`
  flex: 0 0 376px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: rgba(120, 100, 140, 0.6);
  border: none;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CarouselContainer}:hover & {
    opacity: 1;
  }

  &:disabled {
    opacity: 0;
    cursor: default;
  }
`

const PrevButton = styled(NavButton)`
  left: 16px;
`

const NextButton = styled(NavButton)`
  right: 16px;
`

const DesktopCarousel = ({children}) => {
  const [activeChild, setActiveChild] = useState(0) //shows first visible child
  
  const childCount = React.Children.count(children) //counts total number of children
  const maxChild = Math.max(0, childCount - 3) //boundary fewer than 3 children
  
  const handleNext = () => {
    setActiveChild(prev => Math.min(prev + 1, maxChild)) //1 forward + stop at max
  }
  
  const handlePrev = () => {
    setActiveChild(prev => Math.max(prev - 1, 0)) //1 backward + stop max
  }
  
  const slide = activeChild * -408 //slide exact measure of child
  
  return (
    <CarouselContainer>
      <PrevButton 
        onClick={handlePrev} 
        disabled={activeChild === 0} //disabel prev.button
        aria-label="Previous"
      >
        ←
      </PrevButton>
      
      <CarouselTrack $slide={slide}>
        {React.Children.map(children, (child, index) => ( //maps each child into carousel item
          <CarouselItem key={index}> 
          {/*Individual card container with set width and hover effect*/}
            {child} 
          </CarouselItem>
        ))}
      </CarouselTrack>
      
      <NextButton 
        onClick={handleNext} 
        disabled={activeChild === maxChild} //disabel next.button
        aria-label="Next"
      >
        →
      </NextButton>
    </CarouselContainer>
  )
}

export default DesktopCarousel

