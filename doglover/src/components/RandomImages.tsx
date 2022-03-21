import  { useEffect, useState} from "react";
import {Container, Heading, GridItem, Grid, Image} from '@chakra-ui/react'

function RandomImages() {
  const [images, setImages] = useState<string[]>([])

  const getRandomImages = async() =>{
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random/6')
      const data = await response.json()
      setImages(data.message)
    } catch (error:any) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getRandomImages()
  },[])
  
  
  return (
    <Container centerContent>
      <Heading as={'h1'} mt={15} color='teal.700'>Images</Heading>
      <Grid templateColumns={'repeat(3,1fr)'} gap={3} mt={5}>
        {images.map((image, index)=>{
          return (
            <GridItem key={index}>
              <Image src={image} boxSize='250' objectFit={'cover'}/>
            </GridItem>
          )
        })}
      </Grid>
    </Container>
  )
}

export default RandomImages;