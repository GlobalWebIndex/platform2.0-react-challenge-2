import { useEffect, useState } from "react";

type Props = {
    breedName: string;
  };

export default function Breed( {breedName}: Props ) {

    const [breedImage, setBreedImage] = useState('');

    useEffect(() => {
        const fetchBreedImage = () => {

            breedName = breedName.replace('-', '/');

            fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
            .then(data => data.json())
            .then(jsonData => setBreedImage(jsonData.message))
        } 

        fetchBreedImage();
    }, [])

    return(
        <div>
            <img src={breedImage} />
            <p>{breedName}</p>
        </div>
    )
}