import { useState, useEffect } from "react";
import { StyledMain, PageTitle, StyledImage } from "./styles";

export default function RandomImage() {
    const [data, setData] = useState<string>('');
    const [breed, setBreed] = useState('');
           
    useEffect(() => {
        console.log('I fire once.')
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((response) => response.json())
        .then((jsondata) => {
            setData(jsondata.message);
            setBreed(jsondata.message.split('/')[4]);
        });

        
    }, []);



    return(
        <StyledMain>
            <PageTitle>Random Dog Picture</PageTitle>
            <StyledImage src={data} />
            <p>{breed}</p>
        </StyledMain>
    )
}