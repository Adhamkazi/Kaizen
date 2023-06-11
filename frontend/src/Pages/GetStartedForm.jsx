import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import Footer from "./../Components/Footer";
import { useToast } from "@chakra-ui/react";
const GetStartedForm = () => {
  const [codes, setCodes] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [countryCode, setcountryCode] = useState("+91");
  const toast = useToast();

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        const data = await response.json();
        const fetchedCountryCodes = data.map((country) => ({
          code: country.alpha3Code,
          phoneCode: `+${country.callingCodes[0]}`,
        }));
        setCodes(fetchedCountryCodes);
      } catch (error) {
        console.error("Error fetching country codes:", error);
      }
    };

    fetchCountryCodes();
  });

  const handelCheck = async () => {
    let obj = {
      firstName,
      lastName,
      email,
      countryCode,
      contactNumber,
      companyName,
      service,
      message,
    };

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "countryCode",
      "contactNumber",
      "companyName",
      "service",
    ];
    const emptyFields = requiredFields.filter((field) => !obj[field]);
    if (emptyFields.length > 0) {
      toast({
        description: `Please fill in the following fields: ${emptyFields.join(
          ", "
        )}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return; 
    }

    try {
      const res = await fetch(
        "https://difficult-gold-vulture.cyclic.app/genral/genral-5",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );
      let data = await res.json();
      console.log(data);
      toast({
        description: "Thanks for submitting.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setFirstName("");
      setLastName("");
      setEmail("");
      setcountryCode("");
      setContactNumber("");
      setcompanyName("");
      setService("");
      setMessage("");
    } catch (error) {
      console.log(error);
      toast({
        description: "Something went wrong.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Box
        w={"80%"}
        mt={{ base: "200px", md: "30px" }}
        margin={"auto"}
        paddingBottom={"30px"}
      >
        <Heading
          textAlign={"left"}
          fontSize={{ base: "30px", md: "60px" }}
          color={"#0D47A1"}
          fontWeight={"400"}
          mt={{ base: "100px", md: "20px" }}
          fontFamily={"Roboto, sans-serif"}
        >
          Get started with building your team.
        </Heading>
        <Text
          fontSize={{ base: "18px", md: "20px" }}
          fontWeight={500}
          textAlign={"left"}
          paddingRight={{ md: "130px" }}
          mt="20px"
          fontFamily={"Roboto, sans-serif"}
        >
          Congratulations you are a step away from building a global dream team.
          Our on-demand team will help you with your journey to build a global
          team. Help us with few details below and our team will get back
          shortly
        </Text>

        <Box bg="#1565C0" color={"white"} paddingBottom={"30px"}>
          <Box w="90%" margin="auto">
            <Flex
              direction={{ base: "column", md: "row" }}
              gap="30px"
              padding="30px"
            >
              <FormControl>
                <FormLabel fontSize={"12px"} fontWeight={"light"}>
                  First Name*
                </FormLabel>
                <Input
                  type="text"
                  variant="flushed"
                  borderBottom={"4px"}
                  _focus={{ borderBottomColor: "red" }}
                  placeholder="e.g., Emily"
                  _placeholder={{
                    color: "white",
                    fontFamily: "Roboto, sans-serif",
                    padding: "10px",
                  }}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"12px"} fontWeight={"light"}>
                  Last Name*
                </FormLabel>
                <Input
                  type="text"
                  variant="flushed"
                  borderBottom={"4px"}
                  _focus={{ borderBottomColor: "red" }}
                  placeholder="e.g., Smith"
                  _placeholder={{
                    color: "white",
                    fontFamily: "Roboto, sans-serif",
                    padding: "10px",
                  }}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>
            </Flex>

            <Flex
              direction={{ base: "column", md: "row" }}
              gap="30px"
              w="100%"
              padding="30px"
            >
              <FormControl>
                <FormLabel fontSize={"12px"} fontWeight={"light"}>
                  Email*
                </FormLabel>
                <Input
                  type="email"
                  variant="flushed"
                  borderBottom={"4px"}
                  _focus={{ borderBottomColor: "red" }}
                  placeholder="e.g., name@example.com"
                  _placeholder={{
                    color: "white",
                    fontFamily: "Roboto, sans-serif",
                    padding: "10px",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize={"12px"} fontWeight={"light"}>
                  Company Name*
                </FormLabel>
                <Input
                  type="text"
                  variant="flushed"
                  borderBottom={"4px"}
                  _focus={{ borderBottomColor: "red" }}
                  placeholder="e.g., Kaizen"
                  _placeholder={{
                    color: "white",
                    fontFamily: "Roboto, sans-serif",
                    padding: "10px",
                  }}
                  value={companyName}
                  onChange={(e) => setcompanyName(e.target.value)}
                />
              </FormControl>
            </Flex>

            <Flex
              direction={{ base: "column", md: "row" }}
              gap="30px"
              padding="30px"
              w={"100%"}
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                gap="30px"
                w="100%"
              >
                <FormControl>
                  <FormLabel fontSize={"12px"} fontWeight={"light"}>
                    Code*
                  </FormLabel>
                  <Select
                    w={"50%"}
                    variant="flushed"
                    type="number"
                    color={"white"}
                    borderBottom={"4px"}
                    cursor={"pointer"}
                    borderBottomColor={"white"}
                    
                    _focus={{ borderBottomColor: "red" }}
                    value={countryCode}
                    onChange={(e) => setcountryCode(e.target.value)}
                  >
                    {codes.map((country) => (
                      <option key={country.code} value={country.phoneCode} style={{backgroundColor:"#0D47A1"}}>
                        {`${country.code} (${country.phoneCode})`}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={"12px"} fontWeight={"light"}>
                    Phone*
                  </FormLabel>
                  <Input
                    type="number"
                    variant="flushed"
                    borderBottom={"4px"}
                    _focus={{ borderBottomColor: "red" }}
                    placeholder="e.g., 555-555-5555"
                    _placeholder={{
                      color: "white",
                      fontFamily: "Roboto, sans-serif",
                      padding: "10px",
                    }}
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel fontSize={"12px"} fontWeight={"light"}>
                  Select a Service *
                </FormLabel>
                <Select
                  placeholder="Select option"
                  variant={"flushed"}
                  borderBottom={"4px"}
                  borderBottomColor={"white"}
                  color={"white"}
                  cursor={"pointer"}
                  _focus={{ borderBottomColor: "red" }}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="Hire" style={{backgroundColor:"#0D47A1"}} > Hire team</option>
                  <option value="Onboard"style={{backgroundColor:"#0D47A1"}} >Onboard Team</option>
                </Select>
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel fontSize={"12px"} fontWeight={"light"}>
                How can we help?*
              </FormLabel>
              <Textarea
                variant="flushed"
                borderBottom="4px"
                _focus={{ borderBottomColor: "red" }}
                _placeholder={{
                  color: "white",
                  fontFamily: "Roboto, sans-serif",
                  padding: "10px",
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormControl>
          </Box>
          <Button
            alignSelf={"left"}
            mt="30px"
            fontSize={"20px"}
            fontWeight={"light"}
            size="xl"
            height={{ base: "40px", md: "60px" }}
            width={{ base: "200px", md: "350px" }}
            boxShadow="lg"
            p="6"
            rounded="md"
            bg="white"
            borderRadius={"0px"}
            fontFamily="Roboto, sans-serif"
            color="#0D47A1"
            _hover={{ bg: "#DCE775" }}
            onClick={handelCheck}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default GetStartedForm;
