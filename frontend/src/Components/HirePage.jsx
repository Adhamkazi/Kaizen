import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const HirePage = () => {
  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 2 }} w={"80%"} margin={"auto"} spacing={3} alignItems={"center"} justifyItems={"center"} order={{ base: -1, md: 2 }} >
        <Box order={{ base: 2, md: 1 }}  padding={"40px"}display="flex" flexDirection="column"  >
          <Box>
            <Heading textAlign={"left"} fontSize={{base:"35px",md:"40px"}} fontWeight={"semibold"} color={"#184CA8"} >Hiring Global team</Heading>
            <Text mt={{base:"10px",md:"20px"}} textAlign={"left"} fontSize={{base:"20px",md:"20px"}} >
              Streamline your global team-building process effortlessly with
              Humancloud. Say goodbye to the complexities of establishing legal
              entities, managing hiring, payroll, legal matters, compliance,
              infrastructure, operations, and more. With our comprehensive
              solution, we take care of it all and listed below.
            </Text>
          </Box>
          <SimpleGrid columns={{base:1,md:2}} fontSize={{base:"20px",md:"17px"}} mt={"40px"} fontWeight={350}   justifyContent={"space-around"} rowGap={{base:"10px",md:"25px"}} >
            <Flex alignItems={"center"} gap={"10px"} >
              <CheckIcon /> <Text>Employee engagement</Text>
            </Flex>
            <Flex alignItems={"center"} gap={"10px"}>
              <CheckIcon /> <Text>Legal & Compliance</Text>
            </Flex>
            <Flex alignItems={"center"} gap={"10px"}>
              <CheckIcon /> <Text>Taxes & Deductions</Text>
            </Flex>
            <Flex alignItems={"center"} gap={"10px"}>
              <CheckIcon /> <Text>Hardware / Assets</Text>
            </Flex>
            <Flex alignItems={"center"} gap={"10px"}>
              <CheckIcon /> <Text>Payroll & Benefits</Text>
            </Flex>
          </SimpleGrid>
          <Link to="/genral-5" >
          <Button
              size="lg"
              mt="20px"
              bg="#184CA8"
              fontSize={{base:"20px",md:"22px"}}
              px={{base:"40px",md:"30px"}}
              py={{base:"20px",md:"25px"}}
              rounded={"full"}
              color="white"
              alignSelf="flex-start"
            >
              Hire Now →
            </Button>
            </Link>
        </Box>
        <Box order={{ base: 1, md: 2 }} mt={{base:"60px"}} >
          <Image src="https://static.wixstatic.com/media/1cc8b5_254f6df8d87d4950a3282fce7bc73da8~mv2.png/v1/fill/w_913,h_548,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Experience%20Design_edited.png" />
        </Box>
      </SimpleGrid>


      <SimpleGrid columns={{ base: 1, md: 2 }} w={"80%"} margin="auto" spacing={3} alignItems={"center"} justifyItems={"center"} order={{ base: -1, md: 2 }} >
      <Box order={{ base: 1, md: 1 }} mt={{base:"60px"}} >
          <Image src="https://static.wixstatic.com/media/4b0223_fdb8e82894444bc894c78a038e8cc630~mv2.png/v1/fill/w_893,h_548,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/New-07_edited.png" />
        </Box>
        <Box order={{ base: 1, md: 2 }}  padding={"40px"}display="flex" flexDirection="column"  >
          <Box>
            <Heading textAlign={"left"} fontSize={{base:"35px",md:"40px"}} fontWeight={"semibold"} color={"#184CA8"} >Ecosystem that prioritizes Human-First approach</Heading>
            <Text mt={{base:"10px",md:"30px"}} textAlign={"left"} fontSize={{base:"20px",md:"20px"}} >
            In order to understand the your customer deeply any organization must know how to empathize with people. Having a great sense of understanding when it comes to human sentiments has been proven to be highly beneficial for an organic business growth.
            </Text>
          </Box>
          <SimpleGrid columns={{base:1,md:1}} fontSize={{base:"15px",md:"17px"}} mt={"40px"} fontWeight={350}   justifyContent={"space-around"} rowGap={{base:"10px",md:"15px"}} >
            <Flex alignItems={"center"} gap={"10px"} >
              <CheckIcon /> <Text>Build & Onboard your team in stages</Text>
            </Flex>
            <Flex alignItems={"center"} gap={"10px"}>
              <CheckIcon /> <Text>Pay-as-you-go flexibility</Text>
            </Flex>
            <Flex alignItems={"center"} gap={"10px"}>
              <CheckIcon /> <Text>Monitor and rate your team members</Text>
            </Flex>
            <Flex alignItems={"center"} gap={"10px"}>
              <CheckIcon /> <Text>Manage all your Teams, In One Place</Text>
            </Flex>
           
          </SimpleGrid>
          <Link to="/genral-5" >
          <Button
              size="lg"
              mt="20px"
              bg="#184CA8"
              fontSize={{base:"20px",md:"22px"}}
              px={{base:"40px",md:"30px"}}
              py={{base:"20px",md:"25px"}}
              rounded={"full"}
              color="white"
              alignSelf="flex-start"
            >
              Hire Now →
            </Button>
            </Link>
        </Box>
       
      </SimpleGrid>
    </div>
  );
};

export default HirePage;
