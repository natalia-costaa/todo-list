import styled from "styled-components";

export const ButtonTask = styled.button`

    height: 3.5rem;
    width: 5rem;
    border-radius: 5px;

    background-color: ${props => props.theme['--blue-dark']};
    color: ${props => props.theme['--gray-100']};

`