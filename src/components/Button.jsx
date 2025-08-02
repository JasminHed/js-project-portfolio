import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-wrap: nowrap;
  margin-top: 12px;

  @media (min-width: 668px) {
    flex-direction: row;
    gap: 8px;
  }
`;

export const PrimaryButton = styled.a`
  padding: 6px 6px;
  text-decoration: none;
  border-radius: 4px;
  color: var(--color-text);
  background-color: var(--color-primary);
  border: none;
  width: 100%;
  text-align: center;

  @media (min-width: 668px) {
    font-size: 14px;
    padding: 6px 6px;
    width: 130px;
    height: 75px;
  }

  @media (min-width: 1024px) {
    padding: 8px 8px;
    font-size: 16px;
    width: 230px;
    height: 60px;
  }
`;

export const SecondaryButton = styled.a`
  padding: 6px 6px;
  border: 2px solid var(--color-secondary);
  color: var(--color-text);
  text-decoration: none;
  border-radius: 4px;
  width: 100%;
  text-align: center;

  @media (min-width: 668px) {
    padding: 6px 6px;
    font-size: 14px;
    width: 130px;
    height: 75px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    padding: 8px 8px;
    font-size: 16px;
    width: 230px;
    height: 60px;
    margin: 0 auto;
  }
`;
