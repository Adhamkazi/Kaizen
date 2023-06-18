import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
  Button,
  Image,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh(); 

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <Box
      bg={useColorModeValue("#05002D")}  fontFamily={"Plus Jakarta Sans"}
      color={useColorModeValue("white", "white")}
      mt={"40px"}
      data-aos="fade-up" 
    >
      <Box  data-aos="fade-up"  w={"80%"}  py={10} margin={"auto"}>
        <Image
          w={{ base: "50%", md: "20%" }} color={"gray"}
          src="https://josephdonbiz.com/wp-content/uploads/2022/09/Kaizen-Logo.png"
        />
        <SimpleGrid
    columns={{ base: 1, sm: 2, md: 3 }}
    alignItems="center"
    spacing={10} data-aos="fade-up" data-aos-duration="1000">
          <Box>
            <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"23px"}>
                Headquarters
              </Text>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                California
              </Text>
              <Text textAlign={"left"} fontSize={"18px"}>
Vallejo Pl, San Ramon, CA 94583, USA
              </Text>
            </Stack>

            <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Office 
              </Text>
              <Text fontWeight={"bold"} fontSize={"18px"}>
                Pune
              </Text>
              <Text textAlign={"left"} fontSize={"18px"} >
              2S2F, Konark Indrayu Premises, l. Plaza, Kondhawa, Pune 411048, Maharashtra, India,
              
              </Text>
            </Stack>

            {/* <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Hyderabad
              </Text>
              <Text textAlign={"left"} fontSize={"18px"}>
                T-Hub 2.0, 20, Inorbit Mall Rd, Madhapur 500081, Telangana,
                India
              </Text>
            </Stack> */}
            <Stack direction={"row"} spacing={6 } mt="30px">
              <Button label={"Twitter"} href={"#"} bg={"#05002D"}  >
                <FaTwitter   fontSize={"30px"} color="gray" />
              </Button>
              <Button label={"YouTube"} href={"#"}  bg={"#05002D"}>
                <FaYoutube  fontSize={"30px"} color="gray"/>
              </Button>
              <Button label={"Instagram"} href={"#"} bg={"#05002D"}>
                <FaInstagram   fontSize={"30px"} color="gray"/>
              </Button>
              <Button label={"LinkedIn"} href={"#"} bg={"#05002D"}>
                <FaLinkedinIn   fontSize={"30px"} color="gray"/>
              </Button>
            </Stack>
          </Box>

          <Box  padding={{base:0,md:10}}   >
            <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"23px"}>
                Contact Us
              </Text>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                office :
              </Text>
              <Text fontSize={"20px"}>info@Kaizentech.co.in</Text>
              <Text fontSize={"20px"}>India:+91 9545401057</Text>
              <Text fontSize={"20px"}>US:+1 614 888 xxxx</Text>
            </Stack>
            {/* <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Customer Care:
              </Text>
              <Text fontSize={"18px"}>info@Kaizen.ltd</Text>
            </Stack> */}
            {/* <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Careers :
              </Text>
              <Text fontSize={"18px"}>India: +91 77759 08988</Text>
              <Text fontSize={"18px"}>talent@Kaizen.ltd</Text>
            </Stack> */}
          </Box>
          <Box>
            <Stack align={"flex-start"} mt="30px" cursor={"pointer"} >
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Quick Links
              </Text>
              <ScrollLink
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  fontSize={"20px"}  
                >  About Us</ScrollLink>
              <Link to="/contact" fontSize={"20px"}>Contact Us</Link>
              <Link to={"/"} fontSize={"20px"}>Blog</Link>
              <Link to={"/"}fontSize={"20px"}>Careers</Link>
              <Link to={"/privacy-policy"} fontSize={"20px"}>Privacy Policy</Link>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
          
        >
          <Text>© Copyright 2023 – All Right Reserved by Kaizen, Inc.</Text>
        </Container>
      </Box>
    </Box>
  );
}
