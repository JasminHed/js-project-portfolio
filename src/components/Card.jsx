import React from "react";
import styled from "styled-components";

import { ButtonGroup, PrimaryButton, SecondaryButton } from "./Button";
import CardImage from "./Cardimage";

const CardSection = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);


  @media (min-width: 1024px) and (max-width: 1600px) {
   margin-bottom: 25px;
  }

  h3 {
    margin-bottom: 8px;
    margin-top: 10px;
    color: var(--color-text);
  }

  p {
    margin-top: 6px;
    margin-bottom: 6px;
    text-align: left;
  }
    @media (min-width: 1024px) {
    padding: 14px; 
    max-width: 90%;
`;

const Card = ({ type, data }) => {
  return (
    <CardSection>
      <CardImage
        src={data.image}
        alt={data.altText}
        width={data.width}
        height={data.height}
        loading="lazy"
      />
      <h3>{data.name}</h3>
      <p>{data.description}</p>

      {type === "journey" && (
        <>
          <ButtonGroup>
            <SecondaryButton
              href={data.readarticle}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read more about ${data.name} (opens in new tab)`}
            >
              Read article
            </SecondaryButton>
          </ButtonGroup>
        </>
      )}

      {type === "project" && (
        <>
          <p>
            <strong>Languages:</strong> {data.languages.join(", ")}
          </p>
          <p>
            <strong>Features:</strong> {data.features.join(", ")}
          </p>
          <ButtonGroup>
            <PrimaryButton
              href={data.netlify}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live site for ${data.name} (opens in new tab)`} //for screenreaders
            >
              Visit site
            </PrimaryButton>
            <SecondaryButton
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View GitHub code for ${data.name} (external link)`}
            >
              View code on GitHub
            </SecondaryButton>
          </ButtonGroup>
        </>
      )}
    </CardSection>
  );
};

export default Card;
