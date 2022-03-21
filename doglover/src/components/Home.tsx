import {Container, Heading, Text, Image} from '@chakra-ui/react'
import paw from '../images/paw.png'

function Home() {
  return (
    <Container centerContent>
        <Heading as={'h1'} mt={15} color='teal.700'>Dog Lover</Heading>
        <Text fontSize={'lg'} mt={5} color='teal.600' >The place to get your daily cuteness overload!</Text>
        <Image src={paw} mt={8} objectFit='cover' boxSize={'sm'} />
    </Container>
  )
}

export default Home