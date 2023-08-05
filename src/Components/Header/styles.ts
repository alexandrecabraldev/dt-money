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

export const Dialog = styled.dialog`

    padding: 3rem;
    background-color: ${props=>props.theme["gray-2"]};
    top: 25vh;
    left: 25vw;
    width: 50vw;
    position: absolute;
    border-radius: 8px;
    border: none;

    h1{
        font-size: 1.5rem;
        font-weight: 700;
        color: ${props=>props.theme["gray-7"]};
        margin-bottom: 2rem;
    }
`;

export const ImageClose = styled.img`
    position: absolute;

    top: 24px;
    right: 24px;
    cursor: pointer;
`;

export const DialogBackground = styled.div`

    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 0.7; 
`;

export const InputsDialog = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input{
        padding: 1rem;
        background-color: ${props=>props.theme["gray-1"]};
        outline: none;
        border: none;
        border-radius: 6px;
        color: ${props=>props.theme["gray-5"]};
        font-size: 1rem;
        font-weight: 400;
    }
`;

export const ContainerIncomeOutcome = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;

`;

export const IncomeOutcomeStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex: 1;
    padding: 1rem 3.875rem;
    background-color: ${props=>props.theme["gray-3"]};
    border-radius: 6px;
    color: ${props=>props.theme["gray-6"]};
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;

    transition: 0.2s;
    img{
        transition: filter 0.2s;
    }
`;

export const Income = styled(IncomeOutcomeStyle)`

    &:hover{
        background-color: ${props=>props.theme["green-dark"]};
        color: ${props=>props.theme.white};

        img{
            filter: brightness(0) invert(1);
        }
    }
`;

export const Outcome = styled(IncomeOutcomeStyle)`

    &:hover{
        background-color: ${props=>props.theme["red-dark"]};
        color: ${props=>props.theme.white};
        
        img{
            filter: brightness(0) invert(1);
        }
    }
`;

export const ButtonDialog = styled.button`
    border-radius: 6px;
    background-color: ${props=>props.theme.green};
    width: 100%;
    padding: 1rem 0;
    border: none;
    outline: none;
    cursor: pointer;
    text-align: center;
    color:${props=>props.theme.white};
    font-size: 1rem;
    font-weight: 700;
    margin-top: 2.5rem;
    transition: 0.2s;

    &:hover{
        background-color: ${props=>props.theme["green-light"]};
        
    }
`;