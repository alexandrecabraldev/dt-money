import styled from "styled-components";

export const TableContainer = styled.table`
    width: 100%;
    max-width: 70rem;
    margin: 2rem auto 0;
    color: white;

    tbody{
        display: flex;
        flex-direction: column;
        gap: 0.5rem; 
    }
`;

export const Trow = styled.tr`

    display: flex;
    width: 100%;
    padding: 0 2rem;
    background-color: ${props=>props.theme["gray-3"]};

    border-radius: 8px;

    td{
        width: 100%;
        padding: 1.25rem 0;
    }
    
`;