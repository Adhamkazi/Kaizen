import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Feature from "./Feature";
import HowitWorks from "./HowitWorks";
import HirePage from "./HirePage";
import { Crousal } from "./Crousal";
import Footer from "./Footer";
import AchievementPage from "./AchievementPage";
import { Link as RouterLink  } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Box id="home" w={"100%"} mt={"30px"} mx="auto">
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2 }}
          gap="50px"
          alignItems={{ base: "center" }}
        >
          <Box overflow=" hidden" borderRadius=" 5px" mt="50px">
            <Image
              objectFit={"cover"}
              w={"100%"}
              borderTopRightRadius={"40%"}
              borderBottomRightRadius={"10%"}
              boxShadow="md"
              src="https://static.wixstatic.com/media/2b6261_d0eb60d2074849c182c5d343c0bf123c~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/main-banner-img.jpg"
            />
          </Box>
          <Box textAlign={"center"} paddingRight={"30px"}>
            <Heading
              textAlign="left"
              color={"#0D47A1"}
              fontSize={{ base: "35px", md: "55px" }}
              lineHeight={{ base: "37px", md: "60px" }}
              fontWeight="semibold"
            >
              Effortlessly Build and Manage your Global Teams
            </Heading>
            <Text
              mt={"10px"}
              fontSize={{ base: "xl", md: "30px" }}
              letterSpacing={"0.24px"}
              lineHeight={{ base: "30px", md: "33px" }}
              textAlign={"left"}
              fontWeight={350}
            >
              Kaizen's AI-powered platform offers a hassle-free solution for
              building and managing global teams by handling hiring, payroll,
              legal, compliance, infrastructure, operations, and more, so you
              can fully concentrate on your core business objectives.
            </Text>
            <RouterLink to="/genral-5" >
            <Button
              size="lg"
              mt="20px"
              bg="#0D47A1"
              color={"white"}
              fontSize={"25px"}
              px={{base:"50px",md:"40px"}}
              py={{base:"30px",md:"30px"}}
              rounded={"full"}
            >
              Get Started →
            </Button></RouterLink>
          </Box>
        </SimpleGrid>
      </Box>
      <Feature />
      <HowitWorks/>
      <HirePage/>
      <Crousal/>
      <AchievementPage/>
      <Footer/>
    </>
  );
};

export default Home;
