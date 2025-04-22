import React from "react"
import "./Card.css"
import style from "styled-components" //new

const CardWrapper = style.article`
  width: 564px;
  border: 2px solid blue;
  


`


const Card = ({ type, data }) => {
  return (
    <CardWrapper>
      <img src={data.image} alt={data.name} className="card-image" />
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
