import { StyledErrorContainer } from './styles';

export default function Error() {
    return(
        <StyledErrorContainer>
            <img src="https://i.pinimg.com/originals/c1/b9/74/c1b974536e9ceaa2427f8845ed334509.jpg" alt='sad dog' />
            <h1>Oops... None of DogLover routes matched your URL.</h1>
        </StyledErrorContainer>
    )
}