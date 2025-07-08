import React from "react";
import styled from "styled-components";

import Card from "../components/Card";
import DesktopCarousel from "../components/DesktopCarousel";
import freelanceProjectData from "../data/freelanceprojects.json";
import CardWrapper from "../styles/CardWrapper";

const FreelanceProjects = () => {
  return (
    <section id="projects">
      <h2>Freelance and Passion Projects</h2>

      <CardWrapper>
        {freelanceProjectData.freelanceprojects.map((item) => (
          <Card key={item.id} type="project" data={item} />
        ))}
      </CardWrapper>

      <DesktopCarousel>
        {freelanceProjectData.freelanceprojects.map((item) => (
          <Card key={item.id} type="project" data={item} />
        ))}
      </DesktopCarousel>
    </section>
  );
};

export default FreelanceProjects;
