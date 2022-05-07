import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import BreedPhotos from "../components/BreedPhotos/BreedPhotos";

interface Params {
    breed: string;
}

export default function(props: any) {
    const params = useParams<keyof Params>() as Params;

    return(
        <>
            <Header />
            <BreedPhotos breedName={params.breed} itemsPerPage={4} />
        </>
    )
}