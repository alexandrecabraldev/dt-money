import styled from "styled-components";

interface BackgroundColorType{
    colorBackground?: boolean;
}

export const ContainerSummary = styled.main`
    max-width: 70rem;
    display:flex;
    justify-content: space-between;
    margin: auto;
`;

export const Container = styled.div<BackgroundColorType>`

    display: flex;
    gap: 0.75rem;
    flex-direction: column;
    padding: 1.5rem 2rem;
    
    background-color: ${props=>props.colorBackground ? 
    props=>props.theme["green-dark"] : 
    props=>props.theme["gray-4"]};

    border-radius: 6px;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        span{
            color: ${props=>props.theme["gray-6"]};
            font-weight: 400;
            font-size: 1rem;
        }
    }
`;

export const TextValue = styled.span`
    font-weight: 700;
    font-size: 2rem;
    color: ${props=>props.theme["gray-7"]};
`;