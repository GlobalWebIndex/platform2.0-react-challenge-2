import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { dogloverTheme } from '../../dogloverTheme';

export const StyledMain = styled.main`
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 2em;
    @media (min-width: 1024px) {
        margin-top: 6em;
    }
`;

export const PageTitle = styled.h1`
    text-transform: uppercase;
    font-weight: bold;
`;

export const StyledImage = styled.img`
    max-width: 100%;
    max-height: 30em;
`;

export const StyledBreedName = styled.p`
    font-weight: bold;
    font-size: 1.5em;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 0.5em 1em;
    background-color: ${dogloverTheme.colors.main};
    color: white;
    margin-bottom: 1em;
    font-weight: bold;
`;

export const StyledButton = styled.button`
    border: none;
    text-decoration: none;
    padding: 0.5em 1em;
    background-color: ${dogloverTheme.colors.main};
    color: white;
    margin-bottom: 1em;
    &:hover {
        cursor: pointer;
    }
`;