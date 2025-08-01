import styled from "styled-components";

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 24px;
  width: 100%;
  max-width: 100vw;
  gap: 32px;
  margin-bottom: 64px;

  @media (min-width: 1024px) and (max-width: 1600px) {
    margin-bottom: 64px;
  }
`;

const TechContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 820px;
  text-align: center;
`;

const TechText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ul {
    list-style: none;
    padding: 0;
  }
`;

const Tech = () => {
  return (
    <SectionWrapper>
      <h2>Tech</h2>
      <TechContent>
        <TechText>
          <ul>
            <li>Javascript, ES6</li>
            <li>React</li>
            <li>Web Accessibility</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>APIs</li>
            <li>Mob programming</li>
            <li>Pair programming</li>
            <li>Github</li>
          </ul>
        </TechText>
      </TechContent>
    </SectionWrapper>
  );
};

export default Tech;
