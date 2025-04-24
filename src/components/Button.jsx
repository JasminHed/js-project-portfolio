import styled from "styled-components"


export const ButtonGroup = styled.div` 
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;

  @media (min-width: 668px) {
    flex-direction: row; 
    gap: 8px; 
  }
  `

export const PrimaryButton = styled.a`
  padding: 4px 6px;
  text-decoration: none;
  border-radius: 4px;
  color: var(--color-text);
  background-color: var(--color-primary);
  border: none;
  width: fit-content;


  &:hover {
    text-decoration: underline;
  }
`

export const SecondaryButton = styled.a`
  padding: 4px 8px;
  border: 2px solid var(--color-secondary);
  color: var(--color-text);
  text-decoration: none;
  border-radius: 4px;
  width: fit-content;


  &:hover {
    text-decoration: underline;
  }
`

