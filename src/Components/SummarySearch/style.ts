import { styled } from "styled-components";

export const Form = styled.form`
    display: flex;
    gap: 1rem;

    max-width: 70rem;
    margin: 4rem auto 0;
    align-items: center;
`;

export const Search = styled.input`
    width: 100%;
    padding: 1rem;

    background-color: ${props=>props.theme["gray-1"]};
    color: ${props=>props.theme.white};
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    outline: none;
`;

export const Button = styled.button`
    display: flex;
    gap: 0.75rem;
    align-items: center;

    background-color: transparent;
    color: ${props=>props.theme["green-light"]};
    border-radius: 6px;
    border: 1px solid ${props=>props.theme["green-light"]};

    padding: 0.875rem 2rem;
    cursor: pointer;

    font-size: 1rem;
    font-weight: 700;
    transition: 0.2s;

    img{
        transition: filter 0.2s;
    }

    &:hover{
        background-color: ${props=>props.theme.green};
        color: ${props=>props.theme.white};
        border-color: ${props=>props.theme.green};

        img {
            filter: brightness(0) invert(1);
        }
    
    }
`;