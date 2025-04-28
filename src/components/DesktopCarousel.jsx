import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"

// Creating the basic container
const CarouselContainer = styled.div`
  display: none;
  position: relative;
  margin: 2rem 0;
  
  @media (min-width: 1024px) {
    display: block;
  }
`
//Display in a row w. smoot transition
const CarouselTrack = styled.div`
  display: flex;
  padding: 0.5rem 0;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.$offset}px);
`
// Creates same size on all, when hoover lifts a bit
const CarouselItem = styled.div`
  flex: 0 0 auto;
  width: calc(33.33% - 1.5rem);
  margin-right: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`
// Button that only appears when hovered
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
//Scroll position, can users scroll right or left
const DesktopCarousel = ({ children }) => {
  const [offset, setOffset] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  
  // How many cards should show and distance between them
  const calculateBounds = () => {
    if (!containerRef.current || !trackRef.current) return
    
    const containerWidth = containerRef.current.clientWidth
    const trackWidth = trackRef.current.scrollWidth
    
    setCanScrollLeft(offset < 0)
    setCanScrollRight(offset > -(trackWidth - containerWidth))
  }
  
  // Space of each card, what should be shown
  useEffect(() => {
    calculateBounds();
    window.addEventListener('resize', calculateBounds)
    return () => window.removeEventListener('resize', calculateBounds)
  }, [offset])
  
  const handleNext = () => {
    if (!containerRef.current) return
    
    const containerWidth = containerRef.current.clientWidth
    const scrollAmount = containerWidth * 0.66
    
    setOffset(prevOffset => {
      const newOffset = prevOffset - scrollAmount
      const trackWidth = trackRef.current.scrollWidth
      const maxOffset = -(trackWidth - containerWidth)
      
      return Math.max(newOffset, maxOffset)
    })
  }
  
  const handlePrev = () => {
    if (!containerRef.current) return
    
    const containerWidth = containerRef.current.clientWidth
    const scrollAmount = containerWidth * 0.66
    
    setOffset(prevOffset => {
      const newOffset = prevOffset + scrollAmount
      return Math.min(newOffset, 0)
    })
  }
  
  return (
    <CarouselContainer ref={containerRef}>
      <PrevButton 
        onClick={handlePrev} 
        disabled={!canScrollLeft}
        aria-label="Previous"
      >
        &lt;
      </PrevButton>
      
      <CarouselTrack ref={trackRef} $offset={offset}>
        {React.Children.map(children, (child, index) => (
          <CarouselItem key={index}>
            {child}
          </CarouselItem>
        ))}
      </CarouselTrack>
      
      <NextButton 
        onClick={handleNext} 
        disabled={!canScrollRight}
        aria-label="Next"
      >
        &gt;
      </NextButton>
    </CarouselContainer>
  )
}

export default DesktopCarousel







