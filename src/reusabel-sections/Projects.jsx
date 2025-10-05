import React from "react"

import Card from "../components/Card"
import DesktopCarousel from "../components/DesktopCarousel"
import projectData from "../data/projects.json"
import CardWrapper from "../styles/CardWrapper"

const Project = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      
     
  <CardWrapper>
  {projectData.projects.map((item) => (
  <Card key={item.id} type="project" data={item} />
  ))}
  </CardWrapper>
      
      
      <DesktopCarousel>
        {projectData.projects.map((item) => (
          <Card key={item.id} type="project" data={item} />
        ))}
      </DesktopCarousel>
    </section>
  )
}

  

export default Project