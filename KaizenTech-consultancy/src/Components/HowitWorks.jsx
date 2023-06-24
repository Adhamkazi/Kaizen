import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Text,
  Button
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FcBusinessman } from "react-icons/fc";
import { AiTwotoneFlag } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowitWorks = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh(); 
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div id="Howitwork">
      <Box bg={"#E3F2FD"} id="home" mt={"70px"}  fontFamily={"Plus Jakarta Sans"} data-aos="fade-up" >
        <Box
        padding="30px"
          textAlign={"left"}
          pt={{ base: "30px", md: "80px" }}
          w={"95%"}
          margin={"auto"}
        >
          <Heading
            fontSize={{ base: "30px", md: "50px" }}
            lineHeight={"40px"}
            color={"#1E344B"}
            fontWeight={"semibold"}
          >
            Let's Build Your Team
          </Heading>
          <Text
            mt={{ base: "10px", md: "30px" }}
            fontSize={{ base: "21px", md: "25px" }}
            lineHeight={"20px"}
            fontWeight={350}
            color={"#0A1D31"}
          >
            Build, manage, monitor and modify your team with complete control
            and transparency.
          </Text>
        </Box>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          w={"90%"}
          margin={"auto"}
          justifyItems="center"
          textAlign="center"
          gap={"40px"}
          alignItems={"center"}
        >
          <Box padding={"30px"} data-aos="fade-up"  >
            <Image   src="https://i.imgur.com/cOajITr.png" />
            <Heading
              fontSize={{ base: "35px", md: "30px" }}
              lineHeight={"35px"}
              color={"#1E344B"}
              fontWeight={"semibold"}
            >
              Brainstorm the mission
            </Heading>
            <Text
              fontSize={{ base: "20px", md: "20px" }}
              lineHeight={{ base: "30px", md: "30px" }}
              mt={"20px"}
              textAlign={"center"}
              data-aos="fade-up" 
            >
              Brainstorm your product requirements with our AI assistant, and it
              will recommend the ideal team composition tailored to your needs.
              Let our AI take the lead in team building, ensuring the perfect
              blend of expertise to drive your product's success.
            </Text>
          </Box>
          <Box padding={"30px"} data-aos="fade-up" >
            <Image src="https://i.imgur.com/BCPrUVT.png"  w={{base:"70%"}} />
            <Heading
              fontSize={{ base: "35px", md: "30px" }}
              lineHeight={"40px"}
              color={"#1E344B"}
              fontWeight={"semibold"}
            >
              Review + deploy the team
            </Heading>
            <Text
              fontSize={{ base: "20px", md: "20px" }}
              lineHeight={{ base: "30px", md: "30px" }}
              mt={"20px"}
              textAlign={"center"}
              data-aos="fade-up" 
            >
              Our AI leverages our rigorous screening process to curate a pool
              of resources that precisely match your required skill sets. Rest
              assured that these selected resources possess the necessary
              expertise and quality to significantly contribute to the success
              of your project.
            </Text>
          </Box>
          <Box padding={"30px"} data-aos="fade-up" >
            <Image src="https://i.imgur.com/HKxYRpr.png" />
            <Heading
              fontSize={{ base: "35px", md: "30px" }}
              lineHeight={"40px"}
              color={"#1E344B"}
              fontWeight={"semibold"}
            >
              You’re good to go! Start building
            </Heading>
            <Text
               fontSize={{ base: "20px", md: "20px" }}
               lineHeight={{ base: "30px", md: "30px" }}
               mt={"20px"}
               textAlign={"center"}
               data-aos="fade-up" 
            >
              Gain control and visibility with our team and mission dashboard,
              allowing you to efficiently manage, monitor, and modify your
              assembled team. Foster effective collaboration and achieve
              successful project outcomes through seamless control.
            </Text>
          </Box>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 3 }}   w={"100%"} data-aos="fade-up" >  
          <Box textAlign={"left"} bg={"white"}  padding={{base:"50px 30px 30px 30px ",md:"70px 40px 40px 40px "}} >
            <Heading
              color={"#184CA8"}
              fontSize={{base:"40px",md:"40px"}}
              fontWeight={"semibold"}
              lineHeight={{base:"40px",md:"40px"}}
            >
              Collaboration is Supreme with a better Team
            </Heading>
            <Text fontSize={{base:"20px",md:"21px"}} mt="30px" lineHeight={{base:"27px",md:"31px"}}>
              Fuel your product development with the top skilled talent to
              speed-up time, to market and save costs. Whether you are a new
              startup or a mature enterprise, we can help you build an expert
              project team of any size.
            </Text>
          <RouterLink to={"/contact"} >  <Button  mt={"30px"}  variant={"solid"} fontSize={"22px"} py={{base:"30px",md:"30px"}}  rounded={"full"} px={"30px"} color="white" bg="#184CA8">Request Demo</Button></RouterLink>
          </Box>
          {/* box-2 */}
          <Box bg={"#F5F5F5"} padding={{base:"50px 30px 30px 30px ",md:"70px 40px 40px 40px "}} data-aos="fade-up"  >
            <Box  display={{base:"flex",md:"grid"}} alignItems={"center"} >
            <Image  w={{base:"30%"}} src="https://static.wixstatic.com/media/2fc5c2_2e80b6718458404f88b1adea26b64a12~mv2.png/v1/crop/x_17,y_0,w_133,h_161/fill/w_186,h_225,al_c,lg_1,q_85,enc_auto/Frame%2078.png" />
            <Heading
              color={"#184CA8"}
              fontSize={{base:"30px",md:"25px"}}
              fontWeight={"semibold"}
              textAlign={"left"}
            >
              Generative AI Team
            </Heading>
            </Box>
            <Flex gap={"20px"} mt={"20px"}  alignItems={"center"} padding={"10px"} >
              <IconButton
                variant="outline"
                colorScheme="teal"
                fontSize="80px"
                size='lg'
                icon={<FcBusinessman />}
              />
              <Text fontSize={{base:"20px",md:"20px"}} fontWeight={"bold"} textAlign={"left"} >
                PM, Full-Stack Developers, UX Expert & AI Engineer
              </Text>
            </Flex>
            <Flex gap={"20px"} mt={"20px"}  alignItems={"center"} padding={"10px"} >
              <IconButton
                variant="outline"
                colorScheme="teal"
                fontSize="50px"
                size='lg'
                icon={<AiTwotoneFlag />}
              />
              <Text fontSize={{base:"20px",md:"20px"}} fontWeight={"bold"} textAlign={"left"} >
              OpenAI, Node.js, React
              </Text>
            </Flex>
            <Text fontSize={{base:"20px",md:"18px"}} textAlign={"left"} >Use our expertise to create a custom generation AI solution tailored to your product needs and business objectives</Text>
            <RouterLink to={"/contact"} ><Button color={"#184CA8"} variant={"ghost"} mt={"30px"} size={"sm"} fontSize={"20px"}   _hover={{textDecoration:"underline",color:"#184CA8"}}>Get Started</Button></RouterLink>
          </Box>


          {/* box-3 */}

          <Box  bg="#E3F2FD" boxShadow={"md"} paddingTop={"100px"} padding={{base:"50px 30px 30px 30px",md:"70px 40px 40px 40px "}} data-aos="fade-up" >
          <Box  display={{base:"flex",md:"grid"}} alignItems={"center"} >
            <Image  w={{base:"30%"}} src="https://static.wixstatic.com/media/2fc5c2_f5fb1dd4216349e3959640ac29641725~mv2.png/v1/crop/x_13,y_0,w_128,h_161/fill/w_179,h_225,al_c,lg_1,q_85,enc_auto/Frame%2078-1.png" />
            <Heading
              color={"#184CA8"}
              fontSize={{base:"30px",md:"25px"}}
              fontWeight={"semibold"}
              textAlign={"left"}
            >         
eCommerce Mobile Team
            </Heading>
            </Box>
            <Flex gap={"20px"} mt={"20px"}  alignItems={"center"} padding={"10px"} >
              <IconButton
                variant="outline"
                colorScheme="teal"
                fontSize="80px"
                size='lg'
                icon={<FcBusinessman />}
              />
              <Text fontSize={{base:"20px",md:"20px"}} fontWeight={"bold"} textAlign={"left"} >
              Product Manager, Mobile Developer & UI/UX Expert
              </Text>
            </Flex>
            <Flex gap={"20px"} mt={"20px"}  alignItems={"center"} padding={"10px"} >
              <IconButton
                variant="outline"
                colorScheme="teal"
                fontSize="50px"
                size='lg'
                icon={<AiTwotoneFlag />}
              />
              <Text fontSize={{base:"20px",md:"20px"}} fontWeight={"bold"} textAlign={"left"} >
              OFlutter, Dart
              </Text>
            </Flex>
            <Text fontSize={{base:"20px",md:"18px"}} textAlign={"left"} >Use our expertise to create a custom generation AI solution tailored to your product needs and business objectives</Text>
            <RouterLink to={"/contact"}>  <Button color={"#184CA8"} variant={"ghost"} mt={"30px"} size={"sm"}  fontSize={"20px"}   _hover={{textDecoration:"underline",color:"#184CA8"}}>Get Started</Button></RouterLink>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default HowitWorks;
