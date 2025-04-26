import projectData from "../data/projects.json"
import React from "react"
import Card from "../components/Card"
import CardWrapper from "../styles/CardWrapper"
import DesktopCarousel from "../components/DesktopCarousel"
import styled from "styled-components"

const Project = () => {
  return (
    <section>
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

/*{const Project = () => {
  return (
    <>
      <section>
        <h2>Projects</h2>
        <CardWrapper>
          {projectData.projects.map((item) => (
            <Card key={item.id} type="project" data={item} />
          ))}
        </CardWrapper>
      </section>
    </>
  )
}}*/

export default Project