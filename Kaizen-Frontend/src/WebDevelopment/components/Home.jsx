import React from "react";
import img from "../Images/program.jpg";
import { Button } from "@chakra-ui/button";
import {
  Box,
  chakra,
  Flex,
  Stack,
  Heading
} from "@chakra-ui/react";
import { Projects } from "./Projects";
import { About } from "./About";

const Home = () => {
  
  return (
    <>
    <chakra.header>
      <Box
        w="full"
        h="container.sm"
        backgroundImage={img}
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.700"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl",  "3xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              we love to create beautiful and efficient 
              <chakra.span ml="10px" color="blue.400" textDecor="underline">
              websites
              </chakra.span>
            </Heading>
            <Button
              colorScheme="brand"
              bg="blue.300"
              textTransform="uppercase"
              w="fit-content"
            >
              Start project
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  <Projects/>
  {/* <Service/> */}
  <About/>
    </>
  );
};

export { Home };
