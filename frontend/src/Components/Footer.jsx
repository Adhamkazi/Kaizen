import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
  Button,
  Image,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#05002D")}
      color={useColorModeValue("white", "white")}
      mt={"40px"}
    >
      <Box   w={"80%"} py={10} margin={"auto"}>
        <Image
          w={{base:"50%",md:"20%"}}
          src="https://static.wixstatic.com/media/2b6261_f16dbbf214f244a792c4687eeb9d05b2~mv2.png/v1/fill/w_264,h_42,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/white-logo.png"
        />
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Box>
            <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"23px"}>
                Headquarters
              </Text>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                California
              </Text>
              <Text textAlign={"left"} fontSize={"18px"}>
                800 West El Camino Real, Suite 180, Mountain View, CA - 94040
              </Text>
            </Stack>

            <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Development Centers
              </Text>
              <Text fontWeight={"bold"} fontSize={"18px"}>
                Pune
              </Text>
              <Text textAlign={"left"} fontSize={"18px"}>
                Level 2, Prime Business Bay, Baner, Pune 411045, Maharashtra,
                India
              </Text>
            </Stack>

            <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Hyderabad
              </Text>
              <Text textAlign={"left"} fontSize={"18px"}>
                T-Hub 2.0, 20, Inorbit Mall Rd, Madhapur 500081, Telangana,
                India
              </Text>
            </Stack>
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

          <Box>
            <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"23px"}>
                Contact Us
              </Text>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Sales :
              </Text>
              <Text fontSize={"20px"}>sales@Kaizen.ltd</Text>
              <Text fontSize={"20px"}>India:+91 85301 16304</Text>
              <Text fontSize={"20px"}>US:+1 650 887 7006</Text>
            </Stack>
            <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Customer Care:
              </Text>
              <Text fontSize={"18px"}>info@Kaizen.ltd</Text>
            </Stack>
            <Stack align={"flex-start"} mt={"30px"}>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Careers :
              </Text>
              <Text fontSize={"18px"}>India: +91 77759 08988</Text>
              <Text fontSize={"18px"}>talent@Kaizen.ltd</Text>
            </Stack>
          </Box>
          <Box>
            <Stack align={"flex-start"} mt="30px">
              <Text fontWeight={"bold"} fontSize={"20px"}>
                Quick Links
              </Text>
              <Link href={"#"} fontSize={"20px"} >About Us</Link>
              <Link href={"#"} fontSize={"20px"}>Contact Us</Link>
              <Link href={"#"} fontSize={"20px"}>Blog</Link>
              <Link href={"#"}fontSize={"20px"}>Careers</Link>
              <Link href={"#"} fontSize={"20px"}>Privacy Policy</Link>
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
