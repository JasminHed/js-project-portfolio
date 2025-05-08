import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle` 

  :root {
    --color-text: #202020;
    --color-primary: #D3C7DF;
    --color-secondary: #9A7FAC;
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
    line-height: 1.5;
    color: var(--color-text);
    background: white;
    overflow-x: hidden;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  h1 {
    font-family: var(--font-heading);
    font-size: 28px;
  }

  h2 {
    font-family: var(--font-heading);
    font-size: 22px;
    text-align: center;
    margin-bottom: 30px;
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
    color: var(--color-text);
    text-decoration: none;

    &:hover { 
      text-decoration: underline;
      color: var(--color-text);
    }
  }

  @media (min-width: 668px) {
    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 36px;
    }

    h3 {
      font-size: 20px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1600px) {
    h1 {
      font-size: 80px;
    }

    h2 {
      font-size: 64px;
    }

    h3 {
      font-size: 24px;
    }

    main {
      max-width: 1280px;
      margin: 0 auto;
      padding-inline: 24px;
    }
  }
`

export default GlobalStyle

