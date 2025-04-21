import "./Footer.css"

const Footer = () => {
  return (
    <section className="footer-section">
      <h2>Let´s Talk</h2>
      <div className="footer-text">
        <p>Jasmin Hedlund</p>
        <p>073 563 1237</p>
        <p>Email: <a href="mailto:jasminhedlund@gmail.com">jasminhedlund@gmail.com</a></p>
        <p>
          <a href="https://github.com/JasminHed" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/jasmin-hedlund-0b0922242/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
        <img className="footer-image" src="/assets/profile.jpg" alt="Profile picture of Jasmin" />

      </div>
    </section>




  )
}

export default Footer