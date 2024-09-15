import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body::before {
        content: "";
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme['--gray-700']};
        width: 100%;
        height: 20%;
        z-index: -1;

    }

    body {
        background-color: ${props => props.theme['--gray-600']};
    }
    
   
`