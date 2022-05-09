import { useState, useEffect } from 'react';
import { StyledMain, PageTitle, StyledImage, StyledLink, StyledButton, StyledBreedName } from './styles';
import formatBreedName from '../../helpers/formatName';
import CopyToClipBoard from '../CopyToClipBoard/CopyToClipBoard';

export default function RandomImage() {
    const [url, setUrl] = useState<string>('');
    const [rawBreed, setRawBreed] = useState<string>('');
    const [breed, setBreed] = useState<string>('');

    // Funtion to fetch a random image and extract breed name from returned url.
    function getRandomImage() {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            setUrl(data.message);
            setRawBreed(data.message.split('/')[4]);
            setBreed(formatBreedName(data.message.split('/')[4]));
        })
        .catch((error) => {
            console.log(error)
        });
    }
           
    useEffect(() => {
        getRandomImage();
    }, []);

    return(
        <StyledMain>
            <PageTitle>Random Dog Image</PageTitle>
            <StyledButton onClick={getRandomImage}>New random image!</StyledButton>
            <StyledImage src={url} />
            <StyledBreedName>{breed}</StyledBreedName>
            <CopyToClipBoard url={url}/>
            <StyledLink to={`/breeds/${rawBreed}`}>See more {breed} images</StyledLink>
            
            {/* See information about breed on Wikipedia.*/}
            <a href={`http://www.google.com/search?q=${breed} wikipedia&btnI`} target='_blank' rel='noreferrer'>
                See more information about {breed} on Wikipedia
            </a>
        </StyledMain>
    )
}