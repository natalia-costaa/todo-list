import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body::before{
        background-color: ${props => props.theme['--gray-700']};
    }

    body {
        background-color: ${props => props.theme['--gray-600']};
    }
    
`