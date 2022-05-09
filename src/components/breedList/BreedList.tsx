import { useState, useEffect } from 'react';
import Breed from '../breed/Breed';
import { StyledMain, BreedListContainer, StyledInput } from './styles';

export default function BreedList() {
    const [breeds, setBreeds] = useState<string[]>([]);
    const [query, setQuery] = useState<string>('');

    function getBreeds() {
        fetch(`https://dog.ceo/api/breeds/list/all`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            let allBreeds: string[] = [];
            const rawBreeds: string[][] = Object.entries(data.message);
            for (let [key, value] of rawBreeds) {
                if (value.length > 0) {
                    for (let i = 0; i < value.length; i++) {
                        allBreeds.push(key + '-' + value[i]);
                    }
                } else {
                    allBreeds.push(key);
                }
            }
            setBreeds(allBreeds);
        })
        .catch((error) => {
            console.log(error)
        });
    }

           
    useEffect(() => {
        getBreeds();
    }, []);

    return(
        <StyledMain>
            <h1>Dog Breeds</h1>
            <div className='search'>
                <StyledInput  
                    type='text'
                    placeholder={'Find Breed'}
                    onChange={event => setQuery(event.target.value)}
                    value={query}
                />
            </div>
            <BreedListContainer>
                {breeds.map(breed => <Breed key={breed} breedName={breed} query={query} />)}
            </BreedListContainer>
        </StyledMain>
    )
}