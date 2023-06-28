
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
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
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
          <Image
            w={{ base: "50%", md: "10%" }} 
            src="https://josephdonbiz.com/wp-content/uploads/2022/09/Kaizen-Logo.png"
          />
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
           
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
                   Kaizen Consultnacy
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
                    Kaizen For Kids
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
                   Kaizen Programming
                  </Button>
                </RouterLink>
           
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
          size="10px"
          icon={isOpen ? <CloseIcon boxSize={8} /> : <HamburgerIcon boxSize={8} />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen && (
        <Box pb={4} mt="30px" display={{ md: "none" }} >
          <Stack as="nav" textAlign={"left"}>
                 <RouterLink to="//Kaizen-solutions">
                 <Button variant={"unstyled"}  >Kaizen Consultnacy</Button>
                </RouterLink>
                <RouterLink to="/">
                <Button variant={"unstyled"} >Kaizen Kids</Button>
                </RouterLink>
                <RouterLink to="/">
                <Button variant={"unstyled"} >Kaizen Programming</Button>
                </RouterLink>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
