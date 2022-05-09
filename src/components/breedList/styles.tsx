import styled from 'styled-components';
import { dogloverTheme } from '../../dogloverTheme';

export const StyledMain = styled.main`
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & h1 {
        font-family: ${dogloverTheme.font};
        font-weight: extra-bold;
        text-transform: uppercase;
    }
    @media (min-width: 1024px) {
        margin-top: 6em;
    }
`;

export const BreedListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const StyledInput = styled.input`
    margin: auto;
    border: none;
    outline: solid 2px ${dogloverTheme.colors.main};
    border-radius: 10px;
    padding: 0.5em 1em;
    margin-bottom: 1em;
`;