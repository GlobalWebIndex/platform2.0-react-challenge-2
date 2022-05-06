import { Link } from "react-router-dom";
import { NavBar, NavMenu } from "./styles";
import { StyledLink } from "./styles";

export default function Header() {
    return(
        <NavBar>
            <NavMenu>
                <StyledLink to="/random">Random dog image</StyledLink>
                <StyledLink to="/breeds">Dog breeds</StyledLink>
            </NavMenu>
        </NavBar>
    )
}