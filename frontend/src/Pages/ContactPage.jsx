import {
  Box,
  Button,
  Flex,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";
// import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import { useToast } from '@chakra-ui/react'


const ContactPage = () => {
  // const [verified, setVerified] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast()

  // const handleRecaptchaChange = (response) => {
  //   if (response) {
  //     setVerified(true);
  //   } else {
  //     setVerified(false);
  //   }


  // };

  const handelCheck = async () => {
    let obj = {
      firstName,
      lastName,
      email,
      phone,
      company,
      message,
    };
  
    // Check if any of the required fields are empty
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'company', 'message'];
    const emptyFields = requiredFields.filter(field => !obj[field]);
  
    if (emptyFields.length > 0) {
      // Display error toast for empty fields
      toast({
        description: `Please fill in the following fields: ${emptyFields.join(
          ", "
        )}`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return; // Stop execution if any required fields are empty
    }
  
    try {
      const res = await fetch('https://difficult-gold-vulture.cyclic.app/contact/contact-5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
      });
      let data = await res.json();
      console.log(data);
      toast({
        description: "Thanks for submitting.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setFirstName("");
      setLastName("");
       setEmail("");
       setPhone("");
       setCompany("");
       setMessage("");  
    } catch (error) {
      console.log(error);
      toast({
        description: "Something went wrong.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Box bg="#0D47A1" mt={{ base: "100px", md: "10px" }}>
        <Text
          fontSize={{ base: "30px", md: "50px" }}
          padding="30px"
          w={{ base: "90%", md: "40%" }}
          textAlign={"center"}
          color="white"
        >
          Grow Your Business With Our Expertise
        </Text>
      </Box>
      <SimpleGrid columns={{ base: 1, md: 2 }} w={"80%"} margin={"auto"}>
        <Box mt="100px">
          <Text fontSize={"60px"} color={"#0D47A1"} fontWeight={600}>
            Contact Us
          </Text>
        </Box>
        <Box>
          <Flex direction={{ base: "column", md: "row" }} gap="30px" mt="40px">
            <FormControl>
              <FormLabel
                fontSize={{ base: "20px", md: "15px" }}
                fontWeight={400}
              >
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
                _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                fontSize={{ base: "20px", md: "15px" }}
                fontWeight={400}
              >
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
                _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
          </Flex>
          <FormControl mt="40px">
            <FormLabel fontSize={{ base: "20px", md: "15px" }} fontWeight={400}>
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
              _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mt="40px">
            <FormLabel fontSize={{ base: "20px", md: "15px" }} fontWeight={400}>
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
              _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormControl>
          <FormControl mt="40px">
            <FormLabel fontSize={{ base: "20px", md: "15px" }} fontWeight={400}>
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
              _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </FormControl>

          <FormControl mt="40px">
            <FormLabel fontSize={{ base: "20px", md: "15px" }} fontWeight={400}>
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
              _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
              _placeholder={{
                color: "white",
                fontFamily: "Roboto, sans-serif",
                padding: "10px",
              }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
          {/* <FormControl mt="40px"> */}
            {/* <ReCAPTCHA
              sitekey="6LfO1XkmAAAAAM0SHaFcU30RObD-1Z1vsWXPT-zq"
              onChange={handleRecaptchaChange}
            /> */}
          {/* </FormControl> */}
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
            // disabled={!verified}
          >
            Submit
          </Button>
        </Box>
      </SimpleGrid>
      <Footer />
    </div>
  );
};

export default ContactPage;
