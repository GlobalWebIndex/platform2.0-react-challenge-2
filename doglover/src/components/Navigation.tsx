import {Container, Link, Flex, Button} from '@chakra-ui/react'

function Navigation() {
  return (
    <Container maxWidth={'lg'}>
        <Flex justify={'space-evenly'} mt={5}>
            <Link color={'teal.400'} fontSize={'lg'} href='/' >Home</Link>
            <Link color={'teal.400'} fontSize={'lg'} href='/images'  >See dog images</Link>
            <Link color={'teal.400'} fontSize={'lg'} href='/breeds' >All the dog breeds</Link>
        </Flex>
    </Container>
  )
}

export default Navigation;