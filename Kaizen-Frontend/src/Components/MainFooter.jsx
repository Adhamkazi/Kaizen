import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  useColorModeValue,
  Image,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../Gifs/KaizenTech-2.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const MainFooter = () => {
  return (
    <Box
      bg={useColorModeValue("#05002D")}
      fontFamily={"Plus Jakarta Sans"}
      color={useColorModeValue("white", "white")}
      mt="50px"
    >
      <Box w={"80%"} py={10} margin={"auto"}>
        <Box w={{ sm: "30%", md: "20%" }}>
          <Image
            src={logo}
            w={{ base: "70%", md: "100%" }}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(32%) sepia(100%) saturate(1989%) hue-rotate(185deg) brightness(95%) contrast(105%)",
            }}
          />
        </Box>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          alignItems="center"
          spacing={10}
        >
          <Box>
            <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Offices
              </Text>
              <Text fontWeight={"bold"} fontSize={"18px"}>
                Pune, India
              </Text>
              <Text textAlign={"left"} fontSize={"18px"}>
                2S2F, Konark Indrayu Premises, l. Plaza, Kondhawa, Pune 411048,
                Maharashtra, India,
              </Text>
            </Stack>

            <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                California, USA
              </Text>
              <Text textAlign={"left"} fontSize={"18px"}>
                Vallejo Pl, San Ramon, CA 94583, USA
              </Text>
            </Stack>

            <Stack direction={"row"} spacing={6} mt="30px">
              <Button label={"Twitter"} fontSize={{base:"30px",md:"30px"}} href={"#"} bg={"#05002D"}>
                <FaTwitter  color="#2196F3" />
              </Button>
              <Button label={"YouTube"} fontSize={{base:"30px",md:"30px"}} href={"#"} bg={"#05002D"}>
                <FaYoutube  color="#2196F3" />
              </Button>
              <Button  fontSize={{base:"30px",md:"30px"}} label={"Instagram"} href={"#"} bg={"#05002D"}>
                <FaInstagram  color="#2196F3" />
              </Button>
              <Button  fontSize={{base:"30px",md:"30px"}} label={"LinkedIn"} href={"#"} bg={"#05002D"}>
                <FaLinkedinIn  color="#2196F3" />
              </Button>
            </Stack>
          </Box>

          <Box padding={{ base: 0, md: 10 }}>
            <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"23px"}>
                Contact Us :
              </Text>

              <Text fontSize={"20px"}>info@Kaizentech.co.in</Text>
              <Text fontSize={"18px"}>India:+91 9175873737</Text>
              {/* <Text fontSize={"20px"}>US:+1 614 888 xxxx</Text> */}
            </Stack>
          </Box>
          <Box>
            <Stack align={"flex-start"} mt="30px" cursor={"pointer"}>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Quick Links
              </Text>

              <Text> About Us</Text>
              <Link to="/contact" fontSize={"20px"}>
                Contact Us
              </Link>
              {/* <Link to={"/"} fontSize={"20px"}>Blog</Link> */}
              {/* <Link to={"/"}fontSize={"20px"}>Careers</Link> */}
              <Link to={"/privacy-policy"} fontSize={"20px"}>
                Privacy Policy
              </Link>
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
};

export default MainFooter;
