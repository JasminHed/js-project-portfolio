import styled from "styled-components"

const SectionWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
align-self: stretch;
padding: 64px 0px;
height: 580px;
gap: 64px;

`
const SkillsContent = styled.div`
display: flex;
justify-content: center;
align-items: flext-start;
gap: 24px;
width: 820px;
`

const SkillsText = styled.div`
    display: flex;
    flex-direction: column;
    align-self: stretch;
  
`

const Skills = () => {
  return (
    <SectionWrapper>
      <h2>Skills</h2>
      <SkillsContent>
        <SkillsText>
          <h3>Code</h3>
          <p>Javascript, ES6</p>
          <p>React</p>
          <p>Typescript</p>
          <p>HTML</p>
          <p>CSS</p>
        </SkillsText>



        <SkillsText>
          <h3>Toolbox</h3>
          <p>Agile Methodology</p>
          <p>Figma</p>
          <p>Slack/Teams</p>
          <p>VS Code</p>
          <p>Github</p>
          <p>Wordpress</p>
        </SkillsText>

        <SkillsText>
          <h3>Upcoming</h3>
          <p>Node.js</p>
          <p>AI Prompting</p>
        </SkillsText>

        <SkillsText>
          <h3>More</h3>
          <p>Resourceful</p>
          <p>Quick to adapt</p>
          <p>Ownership</p>
          <p>Continious learner</p>
        </SkillsText>

      </SkillsContent>
    </SectionWrapper>
  )
}

export default Skills
