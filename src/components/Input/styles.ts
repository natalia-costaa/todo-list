import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 1rem;
`

export const InputTask = styled.input`
    background-color: ${props => props.theme['--gray-400']};
    border-radius: 5px;
    height: 3.5rem;
    width: 45rem;
    gap: 2rem;
`