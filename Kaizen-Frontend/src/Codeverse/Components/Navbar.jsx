import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  
  Stack,
  Image,
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



const  Navbar = ()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg='white'   >
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'} boxShadow={"lg"}>
        <Flex gap={'10px'} pl={{base:"20px",md:'150px'}} >
              <Image w={"40%"}  src='https://josephdonbiz.com/wp-content/uploads/2022/09/Kaizen-Logo.png'/>
              {/* <Image src='https://uploads-ssl.webflow.com/6165b74221c0712ba456e3b6/6165b90e4b166ab7c07d598b_Codeverse%20Text%20Mark.svg' /> */}
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
              display={{ base: 'none', md: 'flex' }} pr="20px" >
             <Button fontSize={"17px"} fontFamily={"SF pro text, sans-serif"} variant={"unstyled"} color={"#5225EE"}>How kids Learn</Button>
             <Button  fontSize={"17px"} fontFamily={"SF pro text, sans-serif"} color={"#5225EE"} variant={"unstyled"}>Pricing </Button>
             {/* <Button fontSize={"17px"} fontFamily={"SF pro text ,sans-serif"} color={"#5225EE"} variant={"unstyled"}>Blog</Button> */}
             <Button fontSize={"17px"} fontFamily={"SF pro text ,sans-serif"} color={"#5225EE"} variant={"unstyled"}>FAQ</Button>
            </HStack>
          <Flex pr="150px" alignItems={'center'} display={{base:'none',md:'block'}} >
          <Button color={'white'} variant={"solid"}  paddingX={"40px"} py='7' rounded={'full'}  bgGradient='linear(to-l,  #6717E7,#B202F7,)'>Book Your Free Class</Button>
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