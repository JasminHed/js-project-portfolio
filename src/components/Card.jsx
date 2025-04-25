import React from "react"
import styled from "styled-components"
import CardImage from "./Cardimage"
import { ButtonGroup, PrimaryButton, SecondaryButton } from "./Button"


const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 8px; 
    color: var(--color-text);
  }

  p {
  margin-top: 6px;
  margin-bottom: 6px;
  text-align: left;
}
`


const Card = ({ type, data }) => {
  return (
    <CardWrapper>
      <CardImage src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      <p>{data.description}</p>

      {type === "journey" && (
        <>
          <ButtonGroup>
            <SecondaryButton href={data.readarticle} target="_blank" rel="noopener noreferrer">
              Read article
            </SecondaryButton>
          </ButtonGroup>

        </>
      )}

      {type === "project" && (
        <>
          <p>Languages: {data.languages.join(', ')}</p>
          <p>Features: {data.features.join(', ')}</p>
          <ButtonGroup>
            <PrimaryButton href={data.netlify} target="_blank" rel="noopener noreferrer">
              Go to live website
            </PrimaryButton>
            <SecondaryButton href={data.github} target="_blank" rel="noopener noreferrer">
              View Code
            </SecondaryButton>
          </ButtonGroup>

        </>
      )}
    </CardWrapper>
  )
}

export default Card