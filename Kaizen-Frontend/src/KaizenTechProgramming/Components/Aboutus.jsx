import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useStyleConfig,
} from "@chakra-ui/react";
import { FaGraduationCap, FaHome } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import 'typeface-nunito';

const Card = ({ icon, title, description }) => {
  const cardStyles = useStyleConfig("Card");

  return (
    <Box
      className="card"
      fontFamily={"Nunito,sans-serif"}
      maxW="300px"
      h={"300px"}
      p="4"
      bg="white"
      borderRadius="md"
      boxShadow="lg"
      transition="transform 0.7s"
      _hover={{ transform: "scale(1.05)", bg: "blue.300", color: "white" }}
      {...cardStyles}
    >
      <Flex justify="center" align="center" mb="4">
        <Icon as={icon} boxSize={20} color="blue.600" />
      </Flex>
      <Heading as="h3" fontSize="xl" mb="2">
        {title}
      </Heading>
      <Text>{description}</Text>
    </Box>
  );
};

const Aboutus = () => {
  return (
    <div id='aboutus' >
    <Heading mt="40px" fontFamily={"Nunito,sans-serif"}>About us</Heading> 
      <Flex justifyContent="center" alignItems="center" minHeight="80vh">
        <Flex
          className="container"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          
          gap="4"
          p="4"
          cursor={"pointer"}
        >
          <Card
            icon={FaGraduationCap}
            title="Skilled Instructors          "
            description=" Learn programming from industry experts who guide you towards success."
          />
          <Card
            icon={TbWorld}
            title="Online Classes"
            description=" Flexible and convenient programming education from anywhere in the world."
          />
          <Card
            icon={FaHome}
            title="Home Projects"
            description=" Apply your skills to real-world coding projects and showcase your abilities to future employers."
          />
        </Flex>
      </Flex>

      <Container maxW={"5xl"} py={12} bg="blue.100">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={
                "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
              objectFit={"cover"}
            />
          </Flex>
          <Stack spacing={4}>
            {/* <Text
      textTransform={'uppercase'}
      color={'blue.400'}
      fontWeight={600}
      fontSize={'sm'}
      bg={useColorModeValue('blue.50', 'blue.900')}
      p={2}
      alignSelf={'flex-start'}
      rounded={'md'}>
      Our Story
    </Text> */}
            <Heading fontFamily={"Nunito,sans-serif"} >Welcome to KaizenTech</Heading>
            <Text color={"gray.500"} fontSize={"lg"}  fontFamily={"Nunito,sans-serif"} textAlign={"left"}>
              Welcome to our KaizenTech , where we fuel your passion for
              technology and empower you to achieve your programming dreams.
              With a dynamic blend of expert instructors, cutting-edge courses
              in Python, Power BI, Excel, Full Stack Development, and Frontend,
              and flexible online and offline class options, we provide the
              perfect platform for you to unleash your creativity and thrive in
              the rapidly evolving world of programming. Join us and unlock a
              world of endless possibilities as you embark on a journey of
              growth, skill development, and success. Your programming future
              starts here.
            </Text>
            <SimpleGrid
              spacing={4}
              columns={{ md: 2 }}
              fontFamily={'Nunito, sans-serif'}
              color={"gray.600"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Flex alignContent={"center"} alignItems={"center"} gap="10px">
                {<Icon as={FaArrowRight} color={"green.500"} w={5} h={5} />}
                <Text>Skilled Instructors</Text>
              </Flex>
              <Flex alignContent={"center"} alignItems={"center"} gap="10px">
                {<Icon as={FaArrowRight} color={"green.500"} w={5} h={5} />}{" "}
                <Text fontFamily={'Nunito, sans-serif'}>Online and Offline Classes</Text>
              </Flex>
              <Flex alignContent={"center"} alignItems={"center"} gap="10px">
                {<Icon as={FaArrowRight} color={"green.500"} w={5} h={5} />}{" "}
                <Text >  Certification</Text>
              </Flex>
              <Flex alignContent={"center"} alignItems={"center"} gap="10px">
                {<Icon as={FaArrowRight} color={"green.500"} w={5} h={5} />}{" "}
                <Text>Real-world Projects</Text>
              </Flex>
              <Flex alignContent={"center"} alignItems={"center"} gap="10px">
                {<Icon as={FaArrowRight} color={"green.500"} w={5} h={5} />}{" "}
                <Text>Real-world Projects</Text>
              </Flex>
            </SimpleGrid>
          </Stack>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Aboutus;
