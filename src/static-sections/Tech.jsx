import styled from "styled-components"

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 24px;
  width: 100%;
  max-width: 100vw;
  gap: 32px;
  margin-bottom: 64px;

   @media (min-width: 1024px) and (max-width: 1600px) {
  margin-bottom: 64px;
  }
`

const TechContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 820px;
  text-align: center;
`

const TechText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Tech = () => {
  return (
    <SectionWrapper>
      <h2>Tech</h2>
      <TechContent>
        <TechText>
          <p>Javascript, ES6</p>
          <p>React, Node.js</p>
          <p>Web Accessibility</p>
          <p>HTML & CSS</p>
          <p>APIs</p>
          <p>Mob programming</p>
          <p>Pair programming</p>
          <p>Github</p>
        </TechText>
      </TechContent>
    </SectionWrapper>
  )
}

export default Tech
