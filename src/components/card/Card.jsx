import React from "react"
import CardImage from "../Cardimage"
import styled from "styled-components"

const CardWrapper = styled.article`
  width: 100%;
  width: 560px;
  min-height: 300px;


`

const Card = ({ type, data }) => {
  return (
    <CardWrapper>
      <CardImage src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      <p>{data.description}</p>

      {type === "journey" && (
        <>
          <ul>
            {data.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <a href={data.readarticle} target="_blank" rel="noopener noreferrer">
            Read article
          </a>
        </>
      )}

      {type === "project" && (
        <>
          <p>Languages: {data.languages.join(', ')}</p>
          <p>Features: {data.features.join(', ')}</p>
          <a href={data.netlify} target="_blank" rel="noopener noreferrer">
            Live
          </a>{' '}
          |{' '}
          <a href={data.github} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </>
      )}
    </CardWrapper>
  )
}

export default Card
