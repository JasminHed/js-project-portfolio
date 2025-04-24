import styled from "styled-components"

const SectionWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
align-self: stretch;
padding: 64px 0px;
height: 580px;
gap: 64px;

`

const SectionContent = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  width: 820px;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  p {
    margin: 0;
  }

`

const Tech = () => {
  return (
    <SectionWrapper>
      <h2>Tech</h2>
      <SectionContent>
        <div>
          <p>Javascript, ES6</p>
          <p>React, Node.js</p>
          <p>Web Accessibility</p>
          <p>HTML & CSS</p>
          <p>APIs</p>
          <p>Mob programming & Pair programming</p>
          <p>Github</p>
        </div>
      </SectionContent>
    </SectionWrapper>
  )
}


export default Tech