// import {
//   Box,
//   Button,
//   Flex,
//   Input,
//   SimpleGrid,
//   Text,
//   Textarea,
// } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import { FormControl, FormLabel } from "@chakra-ui/react";
// import Footer from "../Components/Footer";
// import { useToast } from '@chakra-ui/react'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { ArrowUpIcon } from '@chakra-ui/icons'

// const ContactPage = () => {
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh(); 

//     return () => {
//       AOS.refresh();
//     };
//   }, []);
//   const handleScrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [company, setCompany] = useState("");
//   const [message, setMessage] = useState("");
//   const toast = useToast()


//   const handelCheck = async () => {
//     let obj = {
//       firstName,
//       lastName,
//       email,
//       phone,
//       company,
//       message,
//     };
  
//     // Check if any of the required fields are empty
//     const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'company', 'message'];
//     const emptyFields = requiredFields.filter(field => !obj[field]);
  
//     if (emptyFields.length > 0) {
//       // Display error toast for empty fields
//       toast({
//         description: `Please fill in the following fields: ${emptyFields.join(
//           ", "
//         )}`,
//         status: 'error',
//         duration: 9000,
//         isClosable: true,
//       });
//       return; // Stop execution if any required fields are empty
//     }
  
//     try {
//       const res = await fetch('https://difficult-gold-vulture.cyclic.app/contact/contact-5', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(obj)
//       });
//       let data = await res.json();
//       console.log(data);
//       toast({
//         description: "Thanks for submitting.",
//         status: 'success',
//         duration: 9000,
//         isClosable: true,
//       });
//       setFirstName("");
//       setLastName("");
//        setEmail("");
//        setPhone("");
//        setCompany("");
//        setMessage("");  
//     } catch (error) {
//       console.log(error);
//       toast({
//         description: "Something went wrong.",
//         status: 'error',
//         duration: 9000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <div>
//       <Box bg="#0D47A1" mt={{ base: "100px", md: "10px" }} >
//         <Text
//           fontSize={{ base: "30px", md: "50px" }}
//           padding="30px"
//           w={{ base: "90%", md: "90%" }}
//           textAlign={"center"}
//           color="white"
//         >
//           Grow Your Business With Our Expertise
//         </Text>
//       </Box>
//       <SimpleGrid columns={{ base: 1, md: 2 }} w={"80%"} margin={"auto"}  >
//         <Box mt="100px">
//           <Text fontSize={"60px"} color={"#0D47A1"} fontWeight={600}>
//             Contact Us
//           </Text>
//         </Box>
//         <Box>
//           <Flex direction={{ base: "column", md: "row" }} gap="30px" mt="40px" >
//             <FormControl >
//               <FormLabel

//                 fontSize={{ base: "20px", md: "15px" }}
//                 fontWeight={400}
//               >
//                 First Name*
//               </FormLabel>
//               <Input
//                 fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
//                 fontStyle={"italic"}
//                 fontWeight={"bold"}
//                 color={"blue"}
//                 type="text"
//                 variant="flushed"
//                 borderBottom={"4px"}
//                 borderBottomColor={"blue"}
//                 _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//               />
//             </FormControl>
//             <FormControl >
//               <FormLabel
//                 fontSize={{ base: "20px", md: "15px" }}
//                 fontWeight={400}
//               >
//                 Last Name*
//               </FormLabel>
//               <Input
//                 fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
//                 fontStyle={"italic"}
//                 fontWeight={"bold"}
//                 color={"blue"}
//                 type="text"
//                 variant="flushed"
//                 borderBottom={"4px"}
//                 borderBottomColor={"blue"}
//                 _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//               />
//             </FormControl>
//           </Flex>
//           <FormControl mt="40px " >
//             <FormLabel fontSize={{ base: "20px", md: "15px" }} fontWeight={400}>
//               Email*
//             </FormLabel>
//             <Input
//               fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
//               fontStyle={"italic"}
//               fontWeight={"bold"}
//               color={"blue"}
//               type="text"
//               variant="flushed"
//               borderBottom={"4px"}
//               borderBottomColor={"blue"}
//               _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </FormControl>
//           <FormControl mt="40px" >
//             <FormLabel fontSize={{ base: "20px", md: "15px" }} fontWeight={400}>
//               Phone*
//             </FormLabel>
//             <Input
//               fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
//               fontStyle={"italic"}
//               fontWeight={"bold"}
//               color={"blue"}
//               type="text"
//               variant="flushed"
//               borderBottom={"4px"}
//               borderBottomColor={"blue"}
//               _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </FormControl>
//           <FormControl mt="40px" >
//             <FormLabel fontSize={{ base: "20px", md: "15px" }} fontWeight={400}>
//               Company*
//             </FormLabel>
//             <Input
//               fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
//               fontStyle={"italic"}
//               fontWeight={"bold"}
//               color={"blue"}
//               type="text"
//               variant="flushed"
//               borderBottom={"4px"}
//               borderBottomColor={"blue"}
//               _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
//               value={company}
//               onChange={(e) => setCompany(e.target.value)}
//             />
//           </FormControl>

//           <FormControl mt="40px" >
//             <FormLabel fontSize={{ base: "20px", md: "15px" }} fontWeight={400}>
//               Write a message?*
//             </FormLabel>
//             <Textarea
//               fontFamily="Book Antiqua, Palatino, Palatino Linotype, Palatino LT STD, Georgia, serif"
//               fontStyle={"italic"}
//               fontWeight={"bold"}
//               color={"blue"}
//               variant="flushed"
//               borderBottom="4px"
//               borderBottomColor={"blue"}
//               _focus={{ borderBottom: "2px", borderBottomColor: "blue" }}
//               _placeholder={{
//                 color: "white",
//                 fontFamily: "Roboto, sans-serif",
//                 padding: "10px",
//               }}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </FormControl>
        
//           <Button
//             _hover={{ bg: "black" }}
//             mt="30px"
//             variant="solid"
//             bg="#0D47A1"
//             rounded="full"
//             size="lg"
//             color="white"
//             px="50px"
//             onClick={handelCheck}
//           >
//             Submit
//           </Button>
//         </Box>
//       </SimpleGrid>
//       <Footer />
//       <Button
//       className="back-to-top d-flex align-items-center justify-content-center"  position="fixed"
//       right="15px"
//       bottom="15px"
//       zIndex="996"
//       width="40px"
//       height="40px"
//       borderRadius="50px"
//       transition="all 0.4s"
//       bg="#47b2e4"
//       color="#fff"
//       _hover={{ bg: "#6bc1e9", color: "#fff" }}
//       _active={{ visibility: "visible", opacity: 1 }}
//       onClick={handleScrollToTop}
//     >
//       <ArrowUpIcon />
//     </Button>
//     </div>
//   );
// };

// export default ContactPage;



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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUpIcon } from '@chakra-ui/icons'
import Navbar from './../../Components/Navbar';
import MainNavbar from "./../../Components/Navbar";

const ContactPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh(); 
    return () => {
      AOS.refresh();
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
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
        "https://difficult-gold-vulture.cyclic.app/contact/contact-5",
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
      <MainNavbar/>
      <Box
      pt={{base:"40px",md:"90px"}}
        w={"80%"}
        margin={"auto"}
        paddingBottom={"30px"}
        
      >
        <Heading
          textAlign={"left"}
          fontSize={{ base: "30px", md: "55px" }}
          color={"#0D47A1"}
          fontWeight={"400"}
          mt={{ base: "100px", md: "20px" }}
          fontFamily={"Roboto, sans-serif"}
        >
        Grow Your Business With Our Expertise
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

        <Box bg="#1565C0" mt="40px" color={"white"} paddingBottom={"30px"}>
          <Box w="90%" margin="auto">
            <Flex
              direction={{ base: "column", md: "row" }}
              gap="30px"
              padding="30px"
            >
              <FormControl >
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
              <FormControl >
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
              <FormControl >
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
              <FormControl >
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
                <FormControl >
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
                <FormControl >
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
            <FormControl >
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
      <Button
      className="back-to-top d-flex align-items-center justify-content-center"  position="fixed"
      right="15px"
      bottom="15px"
      zIndex="996"
      width="40px"
      height="40px"
      borderRadius="50px"
      transition="all 0.4s"
      bg="#47b2e4"
      color="#fff"
      _hover={{ bg: "#6bc1e9", color: "#fff" }}
      _active={{ visibility: "visible", opacity: 1 }}
      onClick={handleScrollToTop}
    >
      <ArrowUpIcon />
    </Button>
    </div>
  );
};

export default ContactPage;
