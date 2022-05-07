import { BrandContainer, NavBar, NavMenu, Wrapper } from "./styles";
import { StyledLink } from "./styles";
import Logo from "../../assets/Logo";

export default function Header() {
    return(
        <NavBar>
            <Wrapper>
                <BrandContainer>
                    <Logo widthProp={60} heightProp={60} />
                    <h1>DogLover</h1>
                </BrandContainer>
                <NavMenu>
                    <StyledLink to="/random">Random dog image</StyledLink>
                    <StyledLink to="/breeds">Dog breeds</StyledLink>
                </NavMenu>
            </Wrapper>
        </NavBar>
    )
}