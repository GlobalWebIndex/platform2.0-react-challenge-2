import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {Container, Image, Heading, Text, Select, Link} from '@chakra-ui/react';

function AllBreeds() {
  const [dogList, setDogList] = useState([]);
  const [dogImage, setDogImage] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('')

  const getDogList = async() => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all');
      const data = await response.json()
      setDogList(data.message)
    } catch (error:any) {
      console.log(error.message)
    }
  }

  const getBreedImage = async(breed:string) => {
    try {
      const response = await fetch (`https://dog.ceo/api/breed/${breed}/images/random`)
      const data = await response.json()
      setDogImage(data.message)
    } catch (error:any) {
      console.log(error.message)
    }
  }

  const handleChange =(event:any)=>{
    setSelectedBreed(event.target.value)
    getBreedImage(event.target.value)
  }


  useEffect(()=>{
    getDogList()
  }, [])


  return (
    <Container centerContent>
      <Heading as={'h3'} mt={15} mb={5} fontSize='lg' color='teal.700'>Here's a list of all the available breeds</Heading>
      <Select  onChange={handleChange}> 
        <option >Choose a breed</option>
        {Object.keys(dogList).map(breed=>{
          return(
            <option>{breed}</option>
          )
        })}
      </Select>
      {dogImage && selectedBreed!=='Choose a breed'?(
        
        <Container centerContent>
          <Heading as={'h2'} color='teal.700' mt={5}>{selectedBreed}</Heading>
          <Image mt={5} src={dogImage} boxSize='350' objectFit={'cover'}/>
          <Link mt={5} color={'teal.400'} fontSize={'lg'} href={`/breeds/${selectedBreed}`}>See more</Link>
       </Container>
      ):(
        <Text mt={'5'} color='teal.700'>Please choose a breed</Text>
        )}
        </Container>
  )
}

export default AllBreeds;