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
import Home from "../Pages/Home";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        boxShadow="sm"
        bg={{ base: useColorModeValue("gray.100", "gray.900"), md: "white" }}
        padding={{base:"5px",md:"10px"}}
        position={{ base: "fixed", md: "relative" }}
        top={{ base: 0, md: "auto" }}
        zIndex={999}
        px={4}
        mt={{ base: "0px", md: "10px" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack
            spacing={8}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Image
              w={{ base: "50%", md: "10%" }}
              src={
                "https://josephdonbiz.com/wp-content/uploads/2022/09/Kaizen-Logo.png"
              }
            />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Button
                bg="white"
                _hover={{ color: "#2196F3", bg: "white" }}
                fontSize={"20px"}
                _visited={{ color: "#2196F3" }}
                fontWeight={400}
              >
                Home
              </Button>
              <Button
                bg="white"
                _hover={{ color: "#2196F3", bg: "white" }}
                fontSize={"20px"}
                _visited={{ color: "#2196F3" }}
                fontWeight={400}
              >
                {" "}
                How it Works
              </Button>
              <Button
                bg="white"
                _hover={{ color: "#2196F3", bg: "white" }}
                fontSize={"20px"}
                _visited={{ color: "#2196F3" }}
                fontWeight={400}
              >
                Features
              </Button>
            </HStack>
            <Box>
              <Button
                display={useBreakpointValue({ base: "none", md: "block" })}
                _hover={{ color: "white", bg: "#3F51B5" }}
                fontSize={"22px"}
                size="lg"
                rounded={"full"}
                bg="#BBDEFB"
                color={"#3F51B5"}
              >
                Get Started
              </Button>
            </Box>
          </HStack>
          <IconButton
            size={"xl"}
            icon={
              isOpen ? <CloseIcon boxSize={8} /> : <HamburgerIcon boxSize={8} />
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Button>Home</Button>
              <Button>How it works </Button>
              <Button>Features</Button>
              <Button>Service</Button>
              <Button>Contact</Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Home />
    </>
  );
}
