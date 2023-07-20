// import { Image } from '@chakra-ui/react';
// import { SimpleGrid } from '@chakra-ui/react';
// import CodingAcademy from "../Gifs/Coding-Academy.png";
// import Consulting from "../Gifs/Consulting.jpg";
// import web from "../Gifs/Web-Devlopment.jpg"
// import young from "../Gifs/young-coders-program.jpg"
// import { Box, Center, Heading, Text, Stack, Button, Flex } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import MainFooter from './MainFooter';
import 'typeface-nunito';
// import JoinOurTeam from './JoinTeam';
import SplitScreen from './HeroHome';
import CardSlider from './CardSlider';

export default function Cards() {
  return (
    < >
      <Navbar />
      <SplitScreen/>
      <CardSlider/>

      {/* <Box   > 
       <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap="20px"  w={"80%"} margin={"auto"}fontFamily={"Nunito,sans-serif"} >  
        <Link to="/Kaizen-training">
        <Center py={6}>
            <Flex
              direction="column"
              maxW="445px"
              w="full"
              bg="gray.100"
              boxShadow="2xl"
              rounded="md"
              p={6}
              overflow="hidden"
              flex={1}
              _hover={{ transform: 'scale(1.05)' }}
              transition="transform 0.3s ease-in-out"
            >
              <Box h="200px" bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
                <Image w="80%" margin="auto" src={CodingAcademy} />
              </Box>
              <Stack mt="20px">
                <Heading color="gray.700" fontSize="2xl" fontFamily={"Nunito,sans-serif"}>
                 Coding Academy
                </Heading>
                <Text color="gray.500">
                  Master Python, Excel, and Power BI with expert-led courses for adults and both IT and non-IT students.
                </Text>
              </Stack>
              <Stack direction="column" spacing={0} mt="50px" fontSize="sm">
                <Link to="/Kaizen-training">
                  <Button bg="#0D47A1" color={'white'} _hover={{ bg: "#0D47A1" }}>
                    View Details
                  </Button>
                </Link>
              </Stack>
            </Flex>
          </Center>
          </Link>
          
          <Link to="/Kaizen-kids">
          <Center py={6}>
            <Flex
              direction="column"
              maxW="445px"
              w="full"
              bg="gray.100"
              boxShadow="2xl"
              rounded="md"
              p={6}
              overflow="hidden"
              flex={1}
              _hover={{ transform: 'scale(1.05)' }}
              transition="transform 0.3s ease-in-out"
            >
              <Box h="200px" bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
                <Image w="80%" margin="auto" src={young} />
              </Box>
              <Stack mt="20px">
                <Heading color="gray.700" fontSize="2xl" fontFamily={"Nunito,sans-serif"}>
                 Young Coder's Program
                </Heading>
                <Text color="gray.500">
                  Unlocking young minds with creative programming and tech education for kids and youth.
                </Text>
              </Stack>
              <Stack direction="column" spacing={0} mt="50px" fontSize="sm">
                <Link to="/Kaizen-kids">
                  <Button bg="#0D47A1" color={'white'} _hover={{ bg: "#0D47A1" }}>
                    View Details
                  </Button>
                </Link>
              </Stack>
            </Flex>
          </Center>
          </Link>


          <Link to="/Kaizen-consulting">
          <Center py={6}>
            <Flex
              direction="column"
              maxW="445px"
              w="full"
              bg="gray.100"
              boxShadow="2xl"
              rounded="md"
              p={6}
              overflow="hidden"
              flex={1}
              _hover={{ transform: 'scale(1.05)' }}
              transition="transform 0.3s ease-in-out"
            >
              <Box h="200px" bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
                <Image w="80%" margin="auto" src={Consulting} />
              </Box>
              <Stack mt="20px">
                <Heading color="gray.800" fontSize="2xl" fontFamily={"Nunito,sans-serif"}>
                    Consulting
                </Heading>
                <Text color="gray.500">
                  Empowering businesses through innovative technology solutions and strategic consulting
                </Text>
              </Stack>
              <Stack direction="column" spacing={0} mt="50px" fontSize="sm">
                <Link to="/Kaizen-consulting">
                  <Button bg="#0D47A1" color={'white'} _hover={{ bg: "#0D47A1" }}>
                    View Details 
                  </Button>
                </Link>
              </Stack>
            </Flex>
          </Center>
          </Link>

          <Link to="/Kaizen-solutions">
          <Center py={6}>
            <Flex
              direction="column"
              maxW="445px"
              w="full"
              bg="gray.100"
              boxShadow="2xl"
              rounded="md"
              p={6}
              overflow="hidden"
              flex={1}
              _hover={{ transform: 'scale(1.05)' }}
              transition="transform 0.3s ease-in-out"
            >
              <Box h="200px" bg="gray.100" mt={-6} mx={-6} mb={6} pos="relative">
                <Image w="80%" margin="auto" src={web} />
              </Box>
              <Stack mt="40px">
                <Heading color="gray.700" fontSize="2xl" fontFamily={"Nunito,sans-serif"}>
                  Web Development
                </Heading>
                <Text color="gray.500">
                  Empowering businesses through innovative technology solutions and strategic consulting
                </Text>
              </Stack>
              <Stack direction="column" spacing={0} mt="50px" fontSize="sm">
                <Link to="/Kaizen-solutions">
                  <Button bg="#0D47A1"  color={'white'} _hover={{ bg: "#0D47A1" }}>
                    View Details
                  </Button>
                </Link>
              </Stack>
            </Flex>
          </Center>
          </Link>
        </SimpleGrid>
      </Box>
     */}
      {/* <JoinOurTeam/> */}
      <MainFooter />
    </>
  );
}
