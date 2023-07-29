import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary:  #1a75b4;
    --secundary: #1db0c8;
    --gray-50: #DDDFEB;
    --gray-100: #97909050;
    --gray-200: #535653;
    --gray-300: #7C838B;
    --white: #FFF;
    --black: #272B30;
    --danger: #EB2E2E;  
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--gray-50);
  }
`