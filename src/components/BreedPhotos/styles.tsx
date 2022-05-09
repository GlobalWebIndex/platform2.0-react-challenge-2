import styled from 'styled-components';
import { dogloverTheme } from '../../dogloverTheme';

export const StyledMain = styled.main`
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2em;

    @media (min-width: 1024px) {
        margin-top: 6em;
    }

    & h1 {
        font-weight: bold;
        text-transform: uppercase;
    }
`;

export const BreedPhotosGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const StyledPaginateContainer = styled.div`
    .pagination {
        color: ${dogloverTheme.colors.main};
        list-style-type: none;
        margin: 1em 0;
        padding: 0;
        display: flex;
        gap: 0.2em;
    }
    .pagination > li {
        cursor: pointer;
    }
    .break-me {
        cursor: default;
    }
    .active {
        border-color: ${dogloverTheme.colors.main};
        border-bottom: 1px solid ${dogloverTheme.colors.main};
        color: black;
    }
    .previous, .next {
        color: black;
        border-bottom: 1px solid ${dogloverTheme.colors.main};
    }
    .previous {
        margin-right: 0.5em;
    }
    .next {
        margin-left: 0.5em;
    }
`;