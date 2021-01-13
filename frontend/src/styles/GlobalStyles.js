import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        max-width: 100vw;
        max-height: 100vh;
    }

    body{
        color: #4F4C4C;
        background: #F3FFEF;
    }

    body, input, button{
        font: 400 1rem/1 'Roboto', sans-serif;
    }

    h1, h2, h3, h4{
        font-family: 'Sansita', cursive;
    }
`;