import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Prata&display=swap');

  :root {
    --color-text: #202020;
    --font-heading: 'Prata', serif;
    --font-body: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    font-family: var(--font-body);
    font-size: 16px;
    color: var(--color-text);
    background: white;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-heading);
    margin: 0;
  }

  h1 {
  font-size: 60px;
  }

  h2 {
  font-size: 40px;
  }

  h3 {
  font-size: 18px;
  }
  
  p {
  margin: 0;
}

a {
  color: #9A7FAC;
  text-decoration: none;
}

a:hover {
text-decoration: underline;
color: inherit;
}
`

export default GlobalStyle
