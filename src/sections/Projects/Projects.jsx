import projectData from "../../data/projects.json"
import React from "react"
import Card from "../../components/card/Card.jsx"


const Project = () => {
  return (
    <div>
      {projectData.projects.map((item) => (
        <Card key={item.id} type="project" data={item} />
      ))}
    </div>
  )
}




export default Project
