import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Box
    fontFamily={"Plus Jakarta Sans"}
      boxShadow="sm"
      bg={{ base: useColorModeValue("gray.100", "gray.900"), md: "white" }}
      padding={{ base: "5px", md: "10px" }}
      position={{ base: "fixed", md: "relative" }}
      top={{ base: 0, md: "auto" }}
      zIndex={999}
      px={4}
      mt={{ base: "0px", md: "10px" }}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack
          spacing={8}
          alignItems="center"
          justifyContent="space-evenly"
       
        >
          {/* <RouterLink to="/"> */}
          <Image
            w={{ base: "50%", md: "10%" }} 
            src="https://josephdonbiz.com/wp-content/uploads/2022/09/Kaizen-Logo.png"
          />
          {/* </RouterLink> */}
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {isHome ? (
              <>
                <ScrollLink
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button
                    bg="white"
                    _hover={{ color: "#2196F3", bg: "white" }}
                    fontSize="20px"
                    _visited={{ color: "#2196F3" }}
                    fontWeight={400}
                    color="black"
                  >
                    Home
                  </Button>
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="Howitwork"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button
                    bg="white"
                    _hover={{ color: "#2196F3", bg: "white" }}
                    fontSize="20px"
                    _visited={{ color: "#2196F3" }}
                    fontWeight={400}
                    color="black"
                  >
                    How it works
                  </Button>
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="feature"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button
                    bg="white"
                    _hover={{ color: "#2196F3", bg: "white" }}
                    fontSize="20px"
                    _visited={{ color: "#2196F3" }}
                    fontWeight={400}
                    color="black"
                  >
                    Features
                  </Button>
                </ScrollLink>
              </>
            ) : (
              <>
                <RouterLink to="/">
                  <Button
                    as="div"
                    bg="white"
                    _hover={{ color: "#2196F3", bg: "white" }}
                    fontSize="20px"
                    _visited={{ color: "#2196F3" }}
                    fontWeight={400}
                    color="black"
                  >
                    Home
                  </Button>
                </RouterLink>
                <RouterLink to="/">
                <Button
                    bg="white"
                    _hover={{ color: "#2196F3", bg: "white" }}
                    fontSize="20px"
                    _visited={{ color: "#2196F3" }}
                    fontWeight={400}
                    color="black"
                  >
                    How it works
                  </Button>
                </RouterLink>
                <RouterLink to="/" >
                <Button
                    bg="white"
                    _hover={{ color: "#2196F3", bg: "white" }}
                    fontSize="20px"
                    _visited={{ color: "#2196F3" }}
                    fontWeight={400}
                    color="black"
                  >
                    Feature
                  </Button>
                </RouterLink>
              </>
            )}
          </HStack>
          <Box>
            <RouterLink to="/genral-5">
              <Button
                display={useBreakpointValue({ base: "none", md: "block" })}
                _hover={{ color: "white", bg: "#3F51B5" }}
                fontSize="22px"
                size="lg"
                rounded="full"
                bg="#BBDEFB"
                color="#3F51B5"
              >
                Get Started
              </Button>
            </RouterLink>
          </Box>
        </HStack>
        <IconButton
          size="xl"
          icon={isOpen ? <CloseIcon boxSize={8} /> : <HamburgerIcon boxSize={8} />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }} >
          <Stack as="nav" textAlign={"left"}>
            {isHome ? (
              <>
                <ScrollLink
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button fontWeight={700} fontFamily={"Roboto,sans-serif"}>Home</Button>
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="Howitwork"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button fontWeight={700} fontFamily={"Roboto,sans-serif"}>How it works</Button>
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="feature"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button fontWeight={700} fontFamily={"Roboto,sans-serif"}>Features</Button>
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  // to="feature"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button fontWeight={700} fontFamily={"Roboto,sans-serif"}> Service</Button>
                </ScrollLink>
                <RouterLink to="/contact"  >
                  <Button fontWeight={700} fontFamily={"Roboto,sans-serif"} >Contact</Button>
                </RouterLink>
              </>
            ) : (
              <>
                <RouterLink to="/">
                  <Button as="div" fontWeight={700} fontFamily={"Roboto,sans-serif"}>Home</Button>
                </RouterLink>
                <RouterLink to="/">
                  <Button as="div" fontWeight={700} fontFamily={"Roboto,sans-serif"}>How it works</Button>
                </RouterLink>
                <RouterLink to="/">
                  <Button as="div"fontWeight={700} fontFamily={"Roboto,sans-serif"}>Service</Button>
                </RouterLink>
                <RouterLink to="/">
                  <Button as="div"fontWeight={700} fontFamily={"Roboto,sans-serif"}>Features</Button>
                </RouterLink>
                <RouterLink to="/contact">
                  <Button as="div"fontWeight={700} fontFamily={"Roboto,sans-serif"}>Conact</Button>
                </RouterLink> 
              </>
            )}
           
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
