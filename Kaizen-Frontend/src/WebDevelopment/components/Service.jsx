import {
    Box,
    Flex,
    Heading,
    Icon,
    Text,
    useStyleConfig,
  } from "@chakra-ui/react";
  import {  FaCode } from "react-icons/fa";
  import {SlDiamond}from "react-icons/sl"
  import {RiComputerLine } from "react-icons/ri";
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
        _hover={{ transform: "scale(1.05)",  }}
        {...cardStyles}
        textAlign={"left"}
      >
        <Flex justify="left" align="center" mb="4"  >
          <Icon as={icon} boxSize={20} color="blue.600" />
        </Flex>
        <Heading as="h3" fontSize="xl" mb="2">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
    );
  };
  
  const Service = () => {
    return (
      <div id='aboutus' >
      <Heading mt="40px" fontFamily={"Nunito,sans-serif"}>Offered services</Heading> 
      <Text  w={{base:"90%" ,md:"50%"}} margin={'auto'}>Web design and development have been my bread and butter for more than 5 years. During that time I've discovered that I can help startups and companies with the following services</Text>
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
              icon={SlDiamond}
              title="DESIGN"
              description="Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth"
            />
            <Card
              icon={FaCode}
              title="DEVELOPMENT"
              description="We can code my own designs or even use the customer's design as base. My focus is to generate clean code that's well structured for reliability"
            />
            <Card
              icon={RiComputerLine}
              title="BASIC SEO"
              description="We can setup your project to use basic SEO principles which will push your project to the first page on search engines and save you ads money"
            />
          </Flex>
        </Flex>
  
      </div>
    );
  };
  
  export default Service;
  