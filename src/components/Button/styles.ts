import styled from "styled-components";

export const ButtonTask = styled.button`

    border: 0;
    border-radius: 8px;
    gap: 0.5rem;
    box-shadow: none;
    height: 3.5rem;
    width: 5rem;

    background-color: ${props => props.theme['--blue-dark']};
    color: ${props => props.theme['--gray-100']};

`