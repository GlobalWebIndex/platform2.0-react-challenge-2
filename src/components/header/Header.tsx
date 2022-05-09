import { BrandContainer, NavBar, NavMenu, Wrapper } from './styles';
import { StyledLink, StyledWebName, HomeLink } from './styles';
import Logo from '../../assets/Logo';

export default function Header() {
    return(
        <NavBar>
            <Wrapper>
                <BrandContainer>
                    <HomeLink to='/random'>
                        <Logo widthProp={60} heightProp={60} />
                        <StyledWebName>DogLover</StyledWebName>
                    </HomeLink>
                </BrandContainer>
                <NavMenu>
                    <StyledLink to='/random'>Random dog image</StyledLink>
                    <StyledLink to='/breeds'>Dog breeds</StyledLink>
                </NavMenu>
            </Wrapper>
        </NavBar>
    )
}