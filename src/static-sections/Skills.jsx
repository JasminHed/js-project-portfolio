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
const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 360px) {
    width: 90%;
  }

  @media (min-width: 668px) {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    gap: 28px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) and (max-width: 1600px) {
    gap: 96px;
    max-width: 1000px;
    justify-content: center;
    padding: 32px 24px 64px;
  }
`;
//Text over each other and aligned in column
const SkillsText = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  min-width: 130px;
  text-align: left;
`;

const Skills = () => {
  return (
    <SectionWrapper>
      <h2>Skills</h2>
      <SkillsContent>
        <SkillsText>
          <h3>Code</h3>
          <p>React</p>
          <p>Javascript, ES6</p>
          <p>Basic, Node.js</p>
          <p>Basic, MongoDB</p>
          <p>HTML</p>
          <p>CSS</p>
        </SkillsText>

        <SkillsText>
          <h3>Toolbox</h3>
          <p>Agile Methodology</p>
          <p>Figma</p>
          <p>Slack/Teams</p>
          <p>CMS</p>
          <p>Github</p>
          <p>CRM</p>
        </SkillsText>

        <SkillsText>
          <h3>Upcoming</h3>
          <p>Sitevision</p>
        </SkillsText>

        <SkillsText>
          <h3>More</h3>
          <p>People-centered</p>
          <p>Resourceful</p>
          <p>Quick to adapt</p>
          <p>Ownership mindset</p>
          <p>Motivated by growth</p>
        </SkillsText>
      </SkillsContent>
    </SectionWrapper>
  );
};

export default Skills;
