import projectData from "../data/projects.json"
import React from "react"
import Card from "../components/Card"
import styled from "styled-components"


const SectionContent = styled.section`
  display: grid;
  grid-template-columns: 1fr;
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
      <section>
        <h2>Projects</h2>
        <SectionContent>
          {projectData.projects.map((item) => (
            <Card key={item.id} type="project" data={item} />
          ))}
        </SectionContent>
      </section>
    </>
  )
}




export default Project
