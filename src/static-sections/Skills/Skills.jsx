import style from "styled-components"

const SectionWrapper = style.section`
display: flex;
flex-direction: column;
align-items: center;
align-self: stretch;
padding: 64px 0px;
height: 580px;
gap: 64px;

`
const SectionContent = style.div`
display: flex;
justify-content: center;
align-items: flext-start;
gap: 24px;
width: 820px;

div {
    display: flex;
    flex-direction: column;
   align-self: stretch;
  }
`

const Skills = () => {
  return (
    <SectionWrapper>
      <h2>Skills</h2>
      <SectionContent>
        <div>
          <h3>Code</h3>
          <p>Javascript, ES6</p>
          <p>React</p>
          <p>Typescript</p>
          <p>HTML</p>
          <p>CSS</p>
        </div>



        <div>
          <h3>Toolbox</h3>
          <p>Agile Methodology</p>
          <p>Figma</p>
          <p>Slack/Teams</p>
          <p>VS Code</p>
          <p>Github</p>
          <p>Wordpress</p>
        </div>

        <div>
          <h3>Upcoming</h3>
          <p>Node.js</p>
          <p>AI Prompting</p>
        </div>

        <div>
          <h3>More</h3>
          <p>Resourceful</p>
          <p>Quick to adapt</p>
          <p>Ownership</p>
          <p>Continious learner</p>
        </div>
      </SectionContent>
    </SectionWrapper>
  )
}

export default Skills
