import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Prata&display=swap');

  :root {
    --color-text: #202020;
    --font-heading: 'Prata', serif;
    --font-body: 'Poppins', sans-serif;
  }

  *, *::before, *::after {
   box-sizing: border-box;
}

main {
  max-width: 100vw;         
  overflow-x: hidden;       
  padding-inline: 16px;    
  display: flex;            
  flex-direction: column;   
}
  body {
    margin: 0;
    font-family: var(--font-body);
    font-size: 16px;
    color: var(--color-text);
    background: white;
    overflow-x: hidden;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  h1 {
  font-family: var(--font-heading);
  font-size: 32px;
  }

  h2 {
  font-family: var(--font-heading);
  font-size: 24px;
  }

  h3 {
  font-family: var(--font-heading);
  font-size: 18px;
  }

  h4 {
  font-family: var(--font-heading);
  font-size: 16px;

  }

a {
  color: #9A7FAC;
  text-decoration: none;

&:hover { 
  text-decoration: underline;
  color: inherit;
}
}

@media (min-width: 668px) {
    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
    font-size: 20px;
  }

  }

  @media (min-width: 1024px) and (max-width: 1600px) {
    h1 {
      font-size: 60px;
    }

    h2 {
      font-size: 40px;
    }

    h3 {
    font-size: 22px;
  }

   
  }
`

export default GlobalStyle
