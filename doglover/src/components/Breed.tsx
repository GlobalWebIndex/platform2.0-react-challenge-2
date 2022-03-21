import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Heading, Image, Container,  Grid} from '@chakra-ui/react';

function Breed() {
  const {breedId} = useParams()
  const [images, setImages] = useState([])

  const getSpecificImages = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breedId}/images`)
      const data = await response.json()
      console.log(data.message)
      setImages(data.message)
      
    } catch (error:any) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    getSpecificImages()
  },[])


  return (
    <Container centerContent>
    <Heading as={'h1'} mt={15} color='teal.700'  mb={10}>{breedId}</Heading>
    <Grid templateColumns='repeat(3,1fr)' gap='2'>
      {images.map(image=>{
        return (
          <Image 
          boxSize='300px'
          objectFit='cover' 
          src={image} alt="" />
        )
      })}
    </Grid>
</Container>
  )
}

export default Breed;