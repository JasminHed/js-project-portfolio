import "./Hero.css"


const Hero = ({ name, title, description, bio, img }) => {
  return (
    <header className="hero-section">
      <div className="hero-text">
        <h2>I am Jasmin Hedlund</h2>
        <h1>Web Developer</h1>
        <p>Hi there 👋🏼 I'm a web developer with a solid tech toolkit of JavaScript, TypeScript, React, Node.js, HTML and CSS – and a human-centered mindset. My background in recruitment, HR and freelance health work has equipped me with solid experience in project management, structure and organization.
          I've collaborated with clients and colleagues from diverse backgrounds, navigated various digital systems, streamlined routines and improved workflows.
          I've also worked closely with a tech team to communicate user feedback and enhance internal processes.
          My interest in AI led me to the tech world, where I then was drawn to its flexibility, inclusivity and creative freedom – a space where my experience can add value.</p>
      </div>
      <img className="hero-image" src="/assets/profile.jpg" alt="Profile picture of Jasmin" />
    </header>
  )
}

export default Hero