import projectData from "../data/projects.json"
import React from "react"
import Card from "../../components/Card.jsx"
import styled from "styled-components"


const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  
@media (min-width: 668px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 28px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

`

const Project = () => {
  return (
    <>
      <h2>Projects</h2>
      <SectionWrapper>
        {projectData.projects.map((item) => (
          <Card key={item.id} type="project" data={item} />
        ))}
      </SectionWrapper>
    </>
  )
}




export default Project
