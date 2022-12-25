import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
:root{
    --Cyan: hsl(180, 66%, 49%);
    --DullCyan: hsl(180, 66%, 80%);
    --DarkViolet: hsl(257, 27%, 26%);
    --Red: hsl(0, 87%, 67%);
    --Gray: hsl(0, 0%, 75%);
    --GrayishViolet: hsl(257, 7%, 63%);
    --VeryDarkBlue: hsl(255, 11%, 22%);
    --VeryDarkViolet: hsl(260, 8%, 14%);
    --Grayish: #eff0f6;
}   

*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

html{
    font-size: 112.5%;

    @media (max-width: 375px) {
    font-size: 60%;
  }
}

body{
    font-family: 'Poppins', sans-serif;
}

img{
    width: 100%;
}


`;

export default GlobalStyle;
