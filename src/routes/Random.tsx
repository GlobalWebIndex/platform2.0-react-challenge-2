import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import RandomImage from '../components/randomImage.tsx/RandomImage';

export default function Random() {
    const [data, setData] = useState<string>('');
    const [breed, setBreed] = useState('');
           
    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((response) => response.json())
        .then((jsondata) => {
            setData(jsondata.message);
            setBreed(jsondata.message.split('/')[4]);
        });
    }, []);


    return(
        <>
            <Header />
            <RandomImage />
        </>
    )
}