import { useState, useEffect } from 'react';
import Breed from '../breed/Breed';
import { StyledMain } from './styles';

export default function BreedList() {
    const [breeds, setBreeds] = useState<string[]>([]);
           
    useEffect(() => {

        const fetchBreeds = () => {
            fetch(`https://dog.ceo/api/breeds/list/all`)
            .then(data => data.json())
            .then(jsonData => {
                let allBreeds: string[] = [];
                const rawBreeds: string[][] = Object.entries(jsonData.message);
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
        }

        fetchBreeds();

    }, []);


    /*
    const allBreeds = breeds.message.map(breed => {
        if (breed.length > 0) {
            for (let i = 0; i < breed.length; i++) {

            }
        }
    });
    */



    return(
        <StyledMain>
            {breeds.map(breed => <Breed key={breed} breedName={breed} />)}
        </StyledMain>
    )
}


/*


export default function Breeds() {

    

    return(
        <div>
            {breeds.map(breed => <Breed key={breed} breedName={breed} />)}
        </div>
    );
}
*/