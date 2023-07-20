 import {
    Box,
    Flex,
    Image,
    Stack,
    Text,    
  } from '@chakra-ui/react';
  import Slide from 'react-reveal/Slide';
  import hero from "../Gifs/hero.jpg"
  export default function SplitScreen() {
    return (
      <Stack  w={"90%"} margin={'auto'} pt={"100px"} direction={{ base: 'column', md: 'row' }}  boxShadow={"sm"} >
        <Slide left>
        <Flex p={8} flex={1} align={'center'} justify={'center'}  >
          <Stack spacing={6} w={'full'} maxW={'lg'} >  
            <Text fontSize={{ base: 'md', lg: 'lg' }} textAlign={"left"} mt={{base:"0px",md:"50px"}}  color={'gray.500'}>
            Our comprehensive range of offerings includes professional programming training, expert consulting services, cutting-edge web development solutions, and engaging coding programs tailored specifically for children. Unleash your full potential and embark on an epic coding journey with our Hero Component today!"
            </Text>
          </Stack>
        </Flex>
        </Slide>
        <Flex flex={1} align={"center"}  >
        <Box textAlign="center"   >
        <Slide right >
      <Image src={hero} />
      </Slide>
    </Box>
        </Flex>
      </Stack>
    );
  }