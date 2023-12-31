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
} from "@chakra-ui/react";
import logo from "../../Gifs/KaizenTech-2.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, Link as RouterLink } from "react-router-dom";
import AnnouncementBar from "../../Components/AnnouncementBar";

const MainNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobileView, setIsMobileView] = React.useState(
    window.innerWidth < 768
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Box
        fontFamily={"Plus Jakarta Sans"}
        boxShadow="sm"
        bg={{ base: useColorModeValue("gray.100", "gray.900"), md: "white" }}
        padding={{ base: "5px", md: "2px" }}
        position={{ base: "fixed", md: "fixed" }}
        w={"100%"}
        zIndex={999}
        px={4}
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
            <HStack as="nav" display={{ base: "none", md: "flex" }}>
              <Link to="/Kaizen-training">
                <Button
                  border={"none"}
                  bg="white"
                  fontFamily={"sans-serif"}
                  // _hover={{
                  //   color: "blue",
                  //   bg: "white",
                  //   textDecoration: "underline",
                  // }}
                  fontSize="14px"
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
                    // _hover={{
                    //   color: "blue",
                    //   bg: "white",
                    //   textDecoration: "underline",
                    // }}
                    fontSize="14px"
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
                    // _hover={{
                    //   color: "blue",
                    //   bg: "white",
                    //   textDecoration: "underline",
                    // }}
                    fontSize="14px"
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
                  
                    fontSize="14px"
                    _visited={{ color: "#2196F3" }}
                    fontWeight={600}
                    color="black"
                  >
                    Consulting
                  </Button>
                </Link>
                <RouterLink to="/contact">
              <Button
            bg="blue"
                    fontFamily={"sans-serif"}
                    border={"none"}
                  
                    fontSize="14px"
                    _visited={{ color: "#2196F3" }}
                    fontWeight={600}
                    color="white"
                  >
                    Contact Us
                  </Button>
            </RouterLink>

            </HStack>
           
          </HStack>
          <IconButton
            size="xl"
            icon={
              isOpen ? <CloseIcon boxSize={8} /> : <HamburgerIcon boxSize={8} />
            }
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={() => {
              setIsMobileView(window.innerWidth < 768);
              isOpen ? onClose() : onOpen(); 
            }}
          />
        </Flex>

        {!isMobileView && <AnnouncementBar />}
        {isMobileView && !isOpen && <AnnouncementBar />}
        {isOpen && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" textAlign={"left"}>
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
                  Consulting
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
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
};

export default MainNavbar;
