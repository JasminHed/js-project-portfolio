import projectData from "../../data/projects.json"
import React from "react"
import Card from "../../components/Card/Card.jsx"
import styled from "styled-components"


const SectionWrapper = styled.section`
display: flex;
flex-direction: row;
gap: 64px;
justify-content: center;

`
const Project = () => {
  return (
    <SectionWrapper id="main">
      {projectData.projects.map((item) => (
        <Card key={item.id} type="project" data={item} />
      ))}
    </SectionWrapper>
  )
}




export default Project
