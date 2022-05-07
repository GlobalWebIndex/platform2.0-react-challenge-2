import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 5em;
    background-color: #fff;
    border-bottom: 1px solid rgba(25,21,48,.1);
    display: flex;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    margin: auto;
    justify-content: space-around;
`;

export const BrandContainer = styled.div`
    display: flex;
    width: 50%;
`;

export const NavMenu = styled.nav`
    color: black;
    display: flex;
    justify-content: space-around;
    width: 50%;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;