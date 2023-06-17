import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link as RouterLink  } from "react-router-dom";
import Feature from './../Components/Feature';
import HowitWorks from './../Components/HowitWorks';
import HirePage from './../Components/HirePage';
import { Crousal } from './../Components/Crousal';
import Footer from './../Components/Footer';
import AchievementPage from './../Components/AchievementPage';
import Blogs from "../Components/Blogs";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh(); // Call AOS.refresh() after the component has mounted

    return () => {
      AOS.refresh(); // Call AOS.refresh() when the component unmounts
    };
  }, []);
  return (
    <>
      <Box  data-aos="fade-up"  id="home" w={"90%"} mt={"30px"} mx="auto" >
        <SimpleGrid
         fontFamily={"Plus Jakarta Sans"}
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
          <Box textAlign={"center"} paddingRight={"30px"} data-aos="fade-up">
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
      <Blogs/>
      <Footer/>
    </>
  );
};

export default Home;
