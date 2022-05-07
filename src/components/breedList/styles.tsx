import styled from "styled-components";

export const StyledMain = styled.main`
    width: 80%;
    max-width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 6em;
`;

export const BreedListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;