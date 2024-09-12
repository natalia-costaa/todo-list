import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: ${props => props.theme['--gray-700']};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12.5rem;

    img {
        height: 3rem;
    }
`
