import styled from "styled-components"

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  margin-top: 12px;

  @media (min-width: 668px) {
    flex-direction: row;
    gap: 8px;
  }
`;

export const PrimaryButton = styled.a`
  padding: 4px 4px;
  text-decoration: none;
  border-radius: 4px;
  color: var(--color-text);
  background-color: var(--color-primary);
  border: none;
  width: fit-content;


  @media (min-width: 668px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    padding: 8px 10px;
    font-size: 16px;
  }
`

export const SecondaryButton = styled.a`
  padding: 4px 4px;
  border: 2px solid var(--color-secondary);
  color: var(--color-text);
  text-decoration: none;
  border-radius: 4px;
  width: fit-content;


  @media (min-width: 668px) {
    padding: 4px 4px;
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    padding: 8px 10px;
    font-size: 16px;
  }
`
