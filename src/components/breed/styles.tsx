import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { dogloverTheme } from '../../dogloverTheme';

export const BreedContainer = styled.div`
    border: 1px solid ${dogloverTheme.colors.main};
    border-radius: 20px;
    max-width: 100%;
    height: 30em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${dogloverTheme.colors.secondary};
    &:hover {
        outline: 3px solid ${dogloverTheme.colors.main};
    }
`;

export const StyledBreedImage = styled.img`
    max-width: 100%;
    max-height: 25em;
    border-radius: 20px 20px 0px 0px;
    width: 400px;
    height: 400px;
    object-fit: cover;
`;

export const StyledBreedName = styled.p`
    text-align: center;
    color: black;
    font-family: ${dogloverTheme.font};
    font-weight: bold;
    margin-bottom: 2em;
`;

export const StyledLink = styled(Link)`
    margin: 1em 2em;
    text-decoration-color: ${dogloverTheme.colors.main};
    &:hover {
        text-decoration-color: black;
    }
`;