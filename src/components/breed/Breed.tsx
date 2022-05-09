import { useEffect, useState, useCallback } from 'react';
import { BreedContainer, StyledBreedImage, StyledBreedName, StyledLink } from './styles';
import formatBreedName from '../../helpers/formatName';

type Props = {
    breedName: string;
    query: string;
};

export default function Breed( {breedName, query}: Props ) {
    const [breedImage, setBreedImage] = useState<string>('');
    const [display, setDisplay] = useState<boolean>(true);

    // Function to fetch a random breed image from the api.
    const getBreedImage = useCallback(() => {
        const urlBreedName = breedName.replace('-', '/');

        fetch(`https://dog.ceo/api/breed/${urlBreedName}/images/random`)
        .then(data => data.json())
        .then(jsonData => {
            setBreedImage(jsonData.message);
            sessionStorage.setItem(breedName, JSON.stringify(jsonData.message));
        });   
    }, [breedName])

    // Check if there is an image url stored in sessionStorage for breedName. If not, fetch one. If it is, setBreedImage the stored image.
    useEffect(() => {
        if (window.sessionStorage.getItem(breedName)) {
            let sessiondata: string = window.sessionStorage.getItem(breedName) as string;
            setBreedImage(JSON.parse(sessiondata));
        } else {
            getBreedImage();
        }
    }, [breedName, getBreedImage])

    // Check if breedName contains the user query from the search field. If it does not, hide this component via setDisplay and conditional rendering.
    useEffect(() => {
        if (formatBreedName(breedName).toLowerCase().includes(query)) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }, [query, breedName])

    return(
        <>
        { display &&
            <StyledLink to={breedName}>
                <BreedContainer>
                    <StyledBreedImage src={breedImage} />
                    <StyledBreedName>{formatBreedName(breedName)}</StyledBreedName>
                </BreedContainer>
            </StyledLink>
        }
        </>
        
    )
}