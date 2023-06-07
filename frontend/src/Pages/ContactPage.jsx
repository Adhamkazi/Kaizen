import { Box, Button, Flex, Input, SimpleGrid, Text, Textarea } from '@chakra-ui/react';
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import Footer from '../Components/Footer';
const ContactPage = () => {
  const [verified, setVerified] = useState(false);
  const handleRecaptchaChange = (response) => {
    if (response) {
      setVerified(true);
    } else {
      setVerified(false);
    }
  };

  const handelCheck=()=>{
    console.log("Check");
  }

  return (
    <div>
      <Box bg="#0D47A1" mt={{base:"100px",md:"10px"}}>
        <Text fontSize={{base:"30px",md:"50px"}} padding="30px" w={{base:"90%",md:"40%"}}  textAlign={"center"} color="white" >
Grow Your Business With Our Expertise</Text>
      </Box>
      <SimpleGrid  columns={{base:1,md:2}} w={"80%"} margin={"auto"} >
        <Box mt="100px" ><Text fontSize={"60px"} color={'#0D47A1'}  fontWeight={600}>Contact Us</Text></Box>
        <Box>
        <Flex
              direction={{ base: "column", md: "row" }}
              gap="30px"
mt="40px"
>
              <FormControl>
                <FormLabel fontSize={{base:"20px",md:"15px"}} fontWeight={400}>
                  First Name*
                </FormLabel>
                <Input
                 fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
                 fontStyle={"italic"}
                 fontWeight={"bold"}
                 color={"blue"}
                  type="text"
                  variant="flushed"
                  borderBottom={"4px"}
                  borderBottomColor={"blue"}
                  _focus={{borderBottom:"2px",borderBottomColor: "blue" }}
                 
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={{base:"20px",md:"15px"}} fontWeight={400}>
                  Last Name*
                </FormLabel>
                <Input
                fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
                fontStyle={"italic"}
                fontWeight={"bold"}
                color={"blue"}
                  type="text"
                  variant="flushed"
                  borderBottom={"4px"}
                  borderBottomColor={"blue"}
                  _focus={{borderBottom:"2px",borderBottomColor: "blue" }}
                 
                />
              </FormControl>
            </Flex>
            <FormControl mt="40px">
                <FormLabel fontSize={{base:"20px",md:"15px"}} fontWeight={400}>
                  Email*
                </FormLabel>
                <Input
                fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
                fontStyle={"italic"}
                fontWeight={"bold"}
                color={"blue"}
                  type="text"
                  variant="flushed"
                  borderBottom={"4px"}
                  borderBottomColor={"blue"}
                  _focus={{borderBottom:"2px",borderBottomColor: "blue" }}
                
                />
              </FormControl>
              <FormControl mt="40px">
                <FormLabel fontSize={{base:"20px",md:"15px"}} fontWeight={400}>
                  Phone*
                </FormLabel>
                <Input
                fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
                fontStyle={"italic"}
                fontWeight={"bold"}
                color={"blue"}
                  type="text"
                  variant="flushed"
                  borderBottom={"4px"}
                  borderBottomColor={"blue"}
                  _focus={{borderBottom:"2px",borderBottomColor: "blue" }}
                 
                />
              </FormControl>
              <FormControl mt="40px">
                <FormLabel fontSize={{base:"20px",md:"15px"}} fontWeight={400}>
                  Company*
                </FormLabel>
                <Input
                fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
                fontStyle={"italic"}
                fontWeight={"bold"}
                color={"blue"}
                  type="text"
                  variant="flushed"
                  borderBottom={"4px"}
                  borderBottomColor={"blue"}
                  _focus={{borderBottom:"2px",borderBottomColor: "blue" }}
                
                />
              </FormControl>

              <FormControl mt="40px">
              <FormLabel fontSize={{base:"20px",md:"15px"}} fontWeight={400}>
                Write a message?*
              </FormLabel>
              <Textarea
              fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
              fontStyle={"italic"}
              fontWeight={"bold"}
              color={"blue"}
                variant="flushed"
                borderBottom="4px"
                borderBottomColor={"blue"}
                _focus={{borderBottom:"2px",borderBottomColor: "blue" }}
                _placeholder={{
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  padding: "10px",
                }}
              />
            </FormControl>
            <FormControl mt="40px">
            <ReCAPTCHA
    sitekey="6LfO1XkmAAAAAM0SHaFcU30RObD-1Z1vsWXPT-zq"
    onChange={handleRecaptchaChange}
  />
  </FormControl>
  <Button
        _hover={{ bg: "black" }}
        mt="30px"
        variant="solid"
        bg="#0D47A1"
        rounded="full"
        size="lg"
        color="white"
        px="50px"
        onClick={handelCheck}
        disabled={!verified}
      >
        Submit
      </Button>
        </Box>
      </SimpleGrid>
      <Footer/>
    </div>
  );
}

export default ContactPage;
