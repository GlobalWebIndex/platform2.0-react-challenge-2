import { Container, StyledImage } from "./styles";

type Props = {
    imageUrl: string;
};

export default function ImageCard({ imageUrl }: Props) {
    return(
        <Container>
            <StyledImage src={imageUrl} />
        </Container>
    )
}