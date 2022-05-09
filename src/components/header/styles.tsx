import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { dogloverTheme } from '../../dogloverTheme';

export const NavBar = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 2em;
    background-color: #fff;
    border-bottom: 1px solid rgba(25,21,48,.1);
    display: flex;
    align-items: center;
    @media (min-width: 1024px) {
        position: fixed;
        top: 0;
        height: 4em;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: auto;
    @media (min-width: 1024px) {
        flex-direction: row;
        width: 60%;
    }
`;

export const BrandContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5em;
`;

export const HomeLink = styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    gap: 0.5em;
`;

export const StyledWebName = styled.p`
    font-size: 2em;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: ${dogloverTheme.colors.main};
`;

export const NavMenu = styled.nav`
    color: black;
    display: flex;
    gap: 1em;
    justify-content: center;
    width: 100%;
    @media (min-width: 1024px) {
        width: 50%;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: ${dogloverTheme.font};
    font-weight: bold;
    &:hover {
        text-decoration: underline;
        text-decoration-color: ${dogloverTheme.colors.main};
    }
`;