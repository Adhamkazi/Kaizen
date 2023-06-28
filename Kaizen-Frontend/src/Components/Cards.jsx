// import { Image } from '@chakra-ui/react';
// import { SimpleGrid } from '@chakra-ui/react';
// import gif from "../Gifs/buissness.gif"
// import kidGif from "../Gifs/kid.gif"
// import programming from "../Gifs/programming.gif"
// import {
//   Box,
//   Center,
//   Heading,
//   Text,
//   Stack,
//   Button
// } from '@chakra-ui/react';

// export default function Cards() {
//   return (
//     <Box>
//         <Heading>Our Services</Heading>
//         <SimpleGrid  columns={{base:1,md:3,lg:3}} gap={"40px"} p={"20px"}>
//     <Center py={6}>
//       <Box
//         maxW={'445px'}
//         w={'full'}
//         bg={('white', 'gray.900')}
//         boxShadow={'2xl'}
//         rounded={'md'}
//         p={6}
//         overflow={'hidden'}>
//         <Box
//           h={'350px'}
//           bg={'gray.100'}
//           mt={-6}
//           mx={-6}
//           mb={6}
//           pos={'relative'}>
//           <Image
//             src={
//               gif
//             }
//           />
//         </Box>
//         <Stack>
          
//           <Heading
//             color={('gray.700', 'white')}
//             fontSize={'2xl'}
//             fontFamily={'body'}>
//            Transform Your Business with KaizenTech Solutions
//           </Heading>
//           <Text color={'gray.500'}>
//           Empowering businesses through innovative technology solutions and strategic consulting
//           </Text>
//         </Stack>
         
//           <Stack direction={'column'} spacing={0} mt="50px" fontSize={'sm'}>
//           <Button bg="red" _hover={{bg:"blue.500"}} >View Details</Button>
//         </Stack>
//       </Box>
//     </Center>



//     <Center py={6}>
//       <Box
//         maxW={'445px'}
//         w={'full'}
//         bg={('white', 'gray.900')}
//         boxShadow={'2xl'}
//         rounded={'md'}
//         p={6}
//         overflow={'hidden'}>
//         <Box
//           h={'350px'}
//           bg={'gray.100'}
//           mt={-6}
//           mx={-6}
//           mb={6}
//           pos={'relative'}>
//           <Image
//             src={
//               kidGif
//             }
//           />
//         </Box>
//         <Stack>
          
//           <Heading
//             color={('gray.700', 'white')}
//             fontSize={'2xl'}
//             fontFamily={'body'}>
//            KaizenTech for Kids and Youth
//           </Heading>
//           <Text color={'gray.500'}>
//           {/* Inspire the Next Generation of Tech Innovators with KaizenTech for Kids and Youth. */}
//           Unlocking young minds with creative programming and tech education for kids and youth.
//           </Text>
//         </Stack>
         
//           <Stack direction={'column'} spacing={0} mt="50px" fontSize={'sm'}>
//           <Button bg="red" _hover={{bg:"blue.500"}} >View Details</Button>
//         </Stack>
//       </Box>
//     </Center>



//     <Center py={6}>
//       <Box
//         maxW={'445px'}
//         w={'full'}
//         bg={('white', 'gray.900')}
//         boxShadow={'2xl'}
//         rounded={'md'}
//         p={6}
//         overflow={'hidden'}>
//         <Box
//           h={'350px'}
//           bg={'gray.100'}
//           mt={-6}
//           mx={-6}
//           mb={6}
//           pos={'relative'}>
//           <Image
//             src={
//               programming
//             }
//           />
//         </Box>
//         <Stack>
          
//           <Heading
//             color={('gray.700', 'white')}
//             fontSize={'2xl'}
//             fontFamily={'body'}>
//           Level Up Your Skills with KaizenTech Programming Courses
//           </Heading>
//           <Text color={'gray.500'}>
//           Master Python, Excel, and Power BI with expert-led courses for adults and both IT and non-IT students.
//           </Text>
//         </Stack>
         
//           <Stack direction={'column'} spacing={0} mt="50px" fontSize={'sm'}>
//           <Button bg="red" _hover={{bg:"blue.500"}} >View Details</Button>
//         </Stack>
//       </Box>
//     </Center>

//     </SimpleGrid>
//     </Box>
//   );
// }

import { Image } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import gif from "../Gifs/buissness.gif";
import kidGif from "../Gifs/kid.gif";
import programming from "../Gifs/programming.gif";
import { Box, Center, Heading, Text, Stack, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Cards() {
  return (
    <>
    <Navbar/>
    <Box>
      <Heading  color={"black"} mt="30px"  fontFamily={"sans-serif"} fontWeight={"semibold"}>Our Services</Heading>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 3 }} gap={'40px'} p={'20px'}>
        <Center py={6}>
          <Flex
            direction="column"
            maxW={'445px'}
            w={'full'}
            bg={('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
            flex={1}
            h={'full'}
          >
            <Box h={'350px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
              <Image src={gif} />
            </Box>
            <Stack>
              <Heading color={('gray.700', 'white')} fontSize={'2xl'} fontFamily={'body'}>
                Transform Your Business with KaizenTech Solutions
              </Heading>
              <Text color={'gray.500'}>
                Empowering businesses through innovative technology solutions and strategic consulting
              </Text>
            </Stack>
            <Stack direction={'column'} spacing={0} mt="100px" fontSize={'sm'}>
              <Link to={'/Kaizen-solutions'} ><Button bg="red" _hover={{bg:"blue.500"}}>View Details</Button></Link>
            </Stack>
          </Flex>
        </Center>

        <Center py={6}>
          <Flex
            direction="column"
            maxW={'445px'}
            w={'full'}
            bg={('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
            flex={1}
            h={'full'}
          >
            <Box h={'350px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
              <Image src={kidGif} />
            </Box>
            <Stack>
              <Heading color={('gray.700', 'white')} fontSize={'2xl'} fontFamily={'body'}>
                KaizenTech for Kids and Youth
              </Heading>
              <Text color={'gray.500'}>
                Unlocking young minds with creative programming and tech education for kids and youth.
              </Text>
            </Stack>
            <Stack direction={'column'} spacing={0} mt="80px" fontSize={'sm'}>
             <Link to='/Kaizen-kids' > <Button bg="red" _hover={{bg:"blue.500"}}>View Details</Button></Link>
            </Stack>
          </Flex>
        </Center>

        <Center py={6}>
          <Flex
            direction="column"
            maxW={'445px'}
            w={'full'}
            bg={('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}
            flex={1}
            h={'full'}
          >
            <Box h={'350px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
              <Image src={programming} />
            </Box>
            <Stack>
              <Heading color={('gray.700', 'white')} fontSize={'2xl'} fontFamily={'body'}>
                Level Up Your Skills with KaizenTech Programming Courses
              </Heading>
              <Text color={'gray.500'}>
                Master Python, Excel, and Power BI with expert-led courses for adults and both IT and non-IT students.
              </Text>
            </Stack>
            <Stack direction={'column'} spacing={0} mt="50px" fontSize={'sm'}>
              <Button bg="red" _hover={{bg:"blue.500"}}>View Details</Button>
            </Stack>
          </Flex>
        </Center>
      </SimpleGrid>
    </Box>
    <Footer/>
    </>
  );
}
