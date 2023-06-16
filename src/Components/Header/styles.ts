import styled from "styled-components";

export const Container = styled.div`

    background-color: ${props=>props.theme["gray-1"]};
    padding: 2.5rem 0 7.625rem;

    header{
        max-width: 1120px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        button{
            padding: 0.75rem 1.25rem;
            background-color: ${props=>props.theme.green};
            border-radius: 6px;
            border: none;
            color: ${props=>props.theme.white};
            cursor: pointer;
            transition: 0.2s;

            &:hover{
                background-color: ${props=>props.theme["green-light"]};
            }
        }
    }
`;

export const ContentImageTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    h1{
        color: ${props=>props.theme.white}
    }
`;