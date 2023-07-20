import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  
  Stack,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
// import Hero from './Hero';
// import WhatIsCodeVerse from './WhatIsCodeVerse';
// // import Kids from './Kids';
// // import Investers from './Investers';
// // import Ranking from './Ranking';
// // import Carousel from './Crousal';
// import GetStarted from './GetStarted';
// import Footer from './Footer';
import { Link as RouterLink } from "react-router-dom";
import logo from "../../Gifs/KaizenTech-2.png"

const  Navbar = ()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg='white'   >
        <Flex h={24} alignItems={'center'} justifyContent={'space-between'} boxShadow={"lg"}>
        <Flex gap={'10px'} pl={{base:"20px",md:'150px'}} >
                <Box  w={{sm:"30%",md:"60%"}} >
          <RouterLink to="/">
          <Image
            w={{ base: "70%", md: "100%" }}
            src={logo}
          />
          </RouterLink>
          </Box>
            </Flex>
          <IconButton
            size={'md'}
            color={"black"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
           
            <HStack
              as={'nav'}
              spacing={10}
              display={{ base: 'none', md: 'flex' }} pr="80px" >
             <Button fontSize={"17px"} fontFamily={"SF pro text, sans-serif"} variant={"unstyled"} color={"#5225EE"}>How kids Learn</Button>
             <Button  fontSize={"17px"} fontFamily={"SF pro text, sans-serif"} color={"#5225EE"} variant={"unstyled"}>Pricing </Button>
             {/* <Button fontSize={"17px"} fontFamily={"SF pro text ,sans-serif"} color={"#5225EE"} variant={"unstyled"}>Blog</Button> */}
             <Button fontSize={"17px"} fontFamily={"SF pro text ,sans-serif"} color={"#5225EE"} variant={"unstyled"}>FAQ</Button>
            </HStack>
          <Flex pr="150px" alignItems={'center'} display={{base:'none',md:'block'}} >
          <RouterLink to="/contact">
              <Button
                display={useBreakpointValue({ base: "none", md: "block" })}
                _hover={{ color: "white", bg: "#3F51B5" }}
                fontSize="20px"
                size="lg"
                rounded="full"
                bg="#BBDEFB"
                color="#3F51B5"
              >
                Contact us
              </Button>
            </RouterLink>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}  textAlign={"left"}>
            <Button color={"#5225EE"}  variant={"unstyled"}>How kids Learn</Button>
             <Button color={"#5225EE"} variant={"unstyled"}>Pricing </Button>
             <Button color={"#5225EE"} variant={"unstyled"}>Blog</Button>
             <Button color={"#5225EE"} variant={"unstyled"}>FAQ</Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
{/* <Hero/> */}
{/* <WhatIsCodeVerse/> */}
{/* <Kids/> */}
{/* <Investers/> */}
{/* <Ranking/> */}
{/* <Carousel/> */}
{/* <GetStarted/> */}
{/* <Footer/> */}
    </>
  );
}


export default Navbar