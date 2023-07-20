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
  // useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../Gifs/KaizenTech-2.png";
import { HamburgerIcon, CloseIcon,  } from "@chakra-ui/icons";
import { Link, Link as RouterLink,  } from "react-router-dom";

const MainNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const location = useLocation();
  // const isHome = location.pathnsame === "/";

  return (
    <>
    <Box
      fontFamily={"Plus Jakarta Sans"}
      boxShadow="sm"
      bg={{ base: useColorModeValue("gray.100", "gray.900"), md: "white" }}
      padding={{ base: "5px", md: "2px" }}
      position={{ base: "fixed", md: "fixed" }}
      // top={{ base: 0, md: "auto" }}
      zIndex={999}
      px={4}
      // mt={{ base: "-100px", md: "-20px" }}
    >
      <Flex
        h={20}
        alignItems="center"
        justifyContent="space-between"
        w={"100%"}
        margin={"auto"}
      >
        <HStack spacing={8} alignItems="center" justifyContent="space-evenly">
          <Box w={{ sm: "30%", md: "20%" }}>
            <RouterLink to="/">
              <Image
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(32%) sepia(100%) saturate(1989%) hue-rotate(185deg) brightness(95%) contrast(105%)",
                }}
                w={{ base: "70%", md: "100%" }}
                src={logo}
              />
            </RouterLink>
          </Box>
          <HStack as="nav"  display={{ base: "none", md: "flex" }}>
            {/* {isHome ? ( */}
              {/* <> */}
                <Link to="/Kaizen-training">
                  <Button
                   border={"none"}
                    bg="white"
                    fontFamily={"sans-serif"}
                    _hover={{
                      color: "blue",
                      bg: "white",
                      textDecoration: "underline",
                    }}
                    fontSize="17px"
                    _visited={{ color: "#2196F3" }}
                    fontWeight={600}
                    color="black"
                  >
                    Coding Academy
                  </Button>
                </Link>

                <Link to="/Kaizen-kids">
                  <Button
                   border={"none"}
                    bg="white"
                    fontFamily={"sans-serif"}
                    _hover={{
                      color: "blue",
                      bg: "white",
                      textDecoration: "underline",
                    }}
                    fontSize="17px"
                    _visited={{ color: "#2196F3" }}
                    fontWeight={600}
                    color="black"
                  >
                    Young Coder's Program
                  </Button>
                </Link>

                <Link to="/web-development">
                  <Button
                    bg="white"
                    border={"none"}
                    fontFamily={"sans-serif"}
                    _hover={{
                      color: "blue",
                      bg: "white",
                      textDecoration: "underline",
                    }}
                    fontSize="17px"
                    _visited={{ color: "#2196F3" }}
                    fontWeight={600}
                    color="black"
                  >
                    Web Development
                  </Button>
                </Link>

                <Link to={"/Kaizen-consulting"}>
                  <Button
                    bg="white"
                    border={"none"}
                    fontFamily={"sans-serif"}
                    _hover={{
                      color: "blue",
                      bg: "white",
                      textDecoration: "underline",
                    }}
                    fontSize="17px"
                    _visited={{ color: "#2196F3" }}
                    fontWeight={600}
                    color="black"
                  >
                    Consulting
                  </Button>
                </Link>
                <RouterLink to="/contact">
              <Button
            bg="white"
                    fontFamily={"sans-serif"}
                    border={"none"}
                    _hover={{
                      color: "blue",
                      bg: "white",
                      textDecoration: "underline",
                    }}
                    fontSize="17px"
                    _visited={{ color: "#2196F3" }}
                    fontWeight={600}
                    color="black"
                  >
                    Contact Us
                  </Button>
            </RouterLink>
              {/* </>
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
                <Menu>
                  <MenuButton
                    as={Button}
                    bg="white"
                    _hover={{ color: "#2196F3", bg: "white" }}
                    fontSize="16px"
                    _visited={{ color: "#2196F3" }}
                    rightIcon={<ChevronDownIcon />}
                  >
                    Our Services
                  </MenuButton>
                  <MenuList>
                    <Link to={"/Kaizen-solutions"}>
                      <MenuItem mt={"20px"}>KaizenTech Solutions</MenuItem>
                    </Link>
                    <Link to="/Kaizen-kids">
                      {" "}
                      <MenuItem mt={"20px"}>
                        KaizenTech for Kids and Youth
                      </MenuItem>
                    </Link>
                    <MenuItem mt={"20px"}>KaizenTech Programming</MenuItem>
                    <MenuItem mt={"20px"}>KaizenTech Web Development</MenuItem>
                  </MenuList>
                </Menu>{" "}
                <RouterLink to="/">
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
            )} */}
          </HStack>
          <Box>
           
          </Box>
        </HStack>
        <IconButton
          size="xl"
          icon={
            isOpen ? <CloseIcon boxSize={8} /> : <HamburgerIcon boxSize={8} />
          }
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" textAlign={"left"}>
            {/* {isHome ? ( */}
            <>
              <Link to="/Kaizen-training">
                <Button
                  _hover={{
                    color: "#2196F3",
                    bg: "white",
                    textDecoration: "underline",
                  }}
                  fontSize="20px"
                  _visited={{ color: "#2196F3" }}
                  fontWeight={400}
                  color="black"
                >
                  Coding Academy
                </Button>
              </Link>

              <Link to="/Kaizen-kids">
                <Button
                  _hover={{
                    color: "#2196F3",
                    bg: "white",
                    textDecoration: "underline",
                  }}
                  fontSize="20px"
                  _visited={{ color: "#2196F3" }}
                  fontWeight={400}
                  color="black"
                >
                  Young Coder's Program
                </Button>
              </Link>

              <Link to="/web-development">
                <Button
                  _hover={{
                    color: "#2196F3",
                    bg: "white",
                    textDecoration: "underline",
                  }}
                  fontSize="20px"
                  _visited={{ color: "#2196F3" }}
                  fontWeight={400}
                  color="black"
                >
                  Web Devlopment
                </Button>
              </Link>
              <Link to={"/Kaizen-consulting"}>
                <Button
                  _hover={{
                    color: "#2196F3",
                    bg: "white",
                    textDecoration: "underline",
                  }}
                  fontSize="20px"
                  _visited={{ color: "#2196F3" }}
                  fontWeight={400}
                  color="black"
                >
                  Cosulting
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  _hover={{
                    color: "#2196F3",
                    bg: "white",
                    textDecoration: "underline",
                  }}
                  fontSize="20px"
                  _visited={{ color: "#2196F3" }}
                  fontWeight={400}
                  color="black"
                >
                  Contact us
                </Button>
              </Link>
            </>
            {/* ) : (
              <>
                <RouterLink to="/">
                  <Button
                    as="div"
                    fontWeight={700}
                    fontFamily={"Roboto,sans-serif"}
                  >
                    Home
                  </Button>
                </RouterLink>
                <RouterLink to="/">
                  <Button
                    as="div"
                    fontWeight={700}
                    fontFamily={"Roboto,sans-serif"}
                  >
                    How it works
                  </Button>
                </RouterLink>
                <RouterLink to="/">
                  <Button
                    as="div"
                    fontWeight={700}
                    fontFamily={"Roboto,sans-serif"}
                  >
                    Service
                  </Button>
                </RouterLink>
                <RouterLink to="/">
                  <Button
                    as="div"
                    fontWeight={700}
                    fontFamily={"Roboto,sans-serif"}
                  >
                    Features
                  </Button>
                </RouterLink>
                <RouterLink to="/contact">
                  <Button
                    as="div"
                    fontWeight={700}
                    fontFamily={"Roboto,sans-serif"}
                  >
                    Conact
                  </Button>
                </RouterLink>
                <Menu>
                  <MenuButton
                    as={Button}
                    bg="white"
                    _hover={{ color: "#2196F3", bg: "white" }}
                    fontSize="16px"
                    _visited={{ color: "#2196F3" }}
                    rightIcon={<ChevronDownIcon />}
                  >
                    Our Services
                  </MenuButton>
                  <MenuList>
                    <Link to={"/Kaizen-solutions"}>
                      <MenuItem mt={"20px"}>KaizenTech Solutions</MenuItem>
                    </Link>
                    <Link to="/Kaizen-kids">
                      {" "}
                      <MenuItem mt={"20px"}>
                        KaizenTech for Kids and Youth
                      </MenuItem>
                    </Link>
                    <MenuItem mt={"20px"}>KaizenTech Programming</MenuItem>
                    <MenuItem mt={"20px"}>KaizenTech Web Development</MenuItem>
                  </MenuList>
                </Menu>
              </>
            )} */}
          </Stack>
        </Box>
      )}
    </Box>
    </>
  );
};

export default MainNavbar;
