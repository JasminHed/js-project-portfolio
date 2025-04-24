import projectData from "../data/projects.json"
import React from "react"
import Card from "../../components/Card.jsx"
import styled from "styled-components"


const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  

  @media (min-width: 668px) {
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 32px;
}

@media (min-width: 1024px) {
  gap: 48px;
}
`

const Project = () => {
  return (
    <SectionWrapper>
      {projectData.projects.map((item) => (
        <Card key={item.id} type="project" data={item} />
      ))}
    </SectionWrapper>
  )
}




export default Project
