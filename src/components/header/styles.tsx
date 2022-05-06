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

export const NavMenu = styled.nav`
    width: 80%;
    margin: auto;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;