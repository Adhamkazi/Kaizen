import React from "react";
import { Box, Heading, Link, Text, useColorModeValue, Image,Container, SimpleGrid,Flex } from "@chakra-ui/react";
import img3 from "../Images/group.jpg";
import {
  Icon,
  useStyleConfig,
} from "@chakra-ui/react";
import {  FaCode } from "react-icons/fa";
import {SlDiamond}from "react-icons/sl"
import {RiComputerLine } from "react-icons/ri";
import 'typeface-nunito';

import { Html5Original } from 'devicons-react';
import { Css3Original } from 'devicons-react';
import { JavascriptOriginal } from 'devicons-react';
import { BootstrapOriginalWordmark } from 'devicons-react';
import { ReactOriginal } from 'devicons-react';
import { FigmaOriginal } from 'devicons-react';
import { MongodbOriginal } from 'devicons-react';
import { NodejsOriginalWordmark } from 'devicons-react';


const Card = ({ icon, title, description }) => {
  const cardStyles = useStyleConfig("Card");

  return (
    <Box
      className="card"
      fontFamily={"Nunito,sans-serif"}
      maxW="300px"
      h={"300px"}
      p="4"
      bg="white"
      borderRadius="md"
      boxShadow="lg"
      transition="transform 0.7s"
      _hover={{ transform: "scale(1.05)",  }}
      {...cardStyles}
      textAlign={"left"}
    >
      <Flex justify="left" align="center" mb="4"  >
        <Icon as={icon} boxSize={20} color="blue.600" />
      </Flex>
      <Heading as="h3" fontSize="xl" mb="2">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

const About = () => {
  return (
    <Container maxW={"7xl"} p="12" mt="10px" id="about">
    
      <Heading mt="40px" fontFamily={"Nunito,sans-serif"}>Offered services</Heading> 
      <Text  w={{base:"90%" ,md:"50%"}} margin={'auto'}>Web design and development have been my bread and butter for more than 5 years. During that time I've discovered that I can help startups and companies with the following services</Text>
        <Flex justifyContent="center" alignItems="center" minHeight="80vh">      
          <Flex
            className="container"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap="4"
            p="4"
            cursor={"pointer"}
          >
            <Card
              icon={SlDiamond}
              title="DESIGN"
              description="Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth"
            />
            <Card
              icon={FaCode}
              title="DEVELOPMENT"
              description="We can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability"
            />
            <Card
              icon={RiComputerLine}
              title="BASIC SEO"
              description="We can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money"
            />
          </Flex>
        </Flex>
      <SimpleGrid marginTop={{ base: 1, sm: 5 }} columns={{ base: 1, sm: 1, md: 2 }} justifyContent="space-between">
        <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
          <Box width={{ base: "100%", sm: "90%" }} zIndex="2" marginLeft={{ base: "0", sm: "5%" }} marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image borderRadius="lg" src={img3} alt="developer" objectFit="contain" />
            </Link>
          </Box>
          
        </Box>
        <Box
          textAlign={"left"}
          columns={{ base: 1, sm: 1, md: 1 }}
          justifyContent="center"
          marginTop={{ base: "20px", sm: "0px", md: "80px" }}
        >
          <Heading fontSize={"24px"} >Why Work With Us</Heading>
          <Text as="p" marginTop="2" color={useColorModeValue("gray.800")} fontSize="lg">
          We are great communicator and love to invest the necessary time to understand the customer's problem very well
          </Text>
          <Heading fontSize={"20px"} >DESIGN TOOLS</Heading>
          <Text as="p" marginTop="2" color={useColorModeValue("gray.800")} fontSize="lg">
         Our favorite design tools are Photoshop and Illustrator but I can create designs in Figma, Sketch and Adobe XD too
          </Text>
          <Heading fontSize={"20px"} >DEVELOPMENT SKILLS</Heading>
          <Text as="p" marginTop="2" color={useColorModeValue("gray.800")} fontSize="lg">
          We are familiar and work on a daily basis with HTML, CSS, JavaScript, Bootstrap,React and other modern frameworks
          </Text>

          <Box display={"flex"} gap="10px" mt="20px" justifyContent={"left"}>
          <Html5Original color="red" size="40"  />
          <Css3Original color="red" size="40"  />
          <JavascriptOriginal color="red" size="40"  />
          <BootstrapOriginalWordmark color="red" size="40"  />
          <ReactOriginal color="red" size="40"  />
          < MongodbOriginal color="red" size="40"  />
          <NodejsOriginalWordmark color="red" size="40"  />
          <FigmaOriginal color="red" size="40"  />
          </Box>
        </Box>  
      </SimpleGrid>
    </Container>
  );
};

export { About };
