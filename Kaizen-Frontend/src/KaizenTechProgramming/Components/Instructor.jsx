import React from "react";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  useStyleConfig,
} from "@chakra-ui/react";
import {  FaLinkedin } from "react-icons/fa";
import "typeface-nunito";

const TeamMemberCard = ({ name, position, description, image, linkedin }) => {
  const cardStyles = useStyleConfig("Card");

  return (
    <Box
      className="team-member-card"
      fontFamily={"Nunito,sans-serif"}
      maxW="300px"
      p="4"
      bg="white"
      borderRadius="md"
      boxShadow="lg"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)" }}
      {...cardStyles}
    >
      <Flex justify="center" align="center" mb="4">
        <Image src={image} alt={name} boxSize="80px" objectFit="cover" borderRadius="full" />
      </Flex>
      <Heading as="h3" fontSize="xl" mb="2">
        {name}
      </Heading>
      <Text fontWeight="bold" mb="2">
        {position}
      </Text>
      <Text>{description}</Text>
      <Flex justify="center" mt="4">
        <Link href={linkedin} isExternal>
          <Icon as={FaLinkedin} boxSize={6} color="blue.600" />
        </Link>
      </Flex>
    </Box>
  );
};

const Instructor = () => {
  const teamMembers = [
    {
      name: "Tabassum Inamadar",
      position: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "john-doe.jpg",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      name: "Ameen Syed",
      position: "CTO",
      description: "Pellentesque ac libero sit amet dui vehicula rutrum.",
      image: "jane-smith.jpg",
      linkedin: "https://www.linkedin.com/in/janesmith",
    },
    {
      name: "Owaise Zarger",
      position: "Lead Developer",
      description: "Fusce vel ante vitae dolor interdum finibus at et nunc.",
      image: "david-johnson.jpg",
      linkedin: "https://www.linkedin.com/in/davidjohnson",
    },
    
    {
      name: "Adham Kazi",
      position: "Lead Developer",
      description: "Fusce vel ante vitae dolor interdum finibus at et nunc.",
      image: "david-johnson.jpg",
      linkedin: "https://www.linkedin.com/in/davidjohnson",
    },
  ];


  return (
    <div id="ourteam">
      <Heading mt="40px" fontFamily={"Nunito,sans-serif"}>
        Our Team
      </Heading>
      <Flex justifyContent="center" alignItems="center" minHeight="80vh">
        <Flex
          className="team-members-container"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap="4"
          p="4"
          cursor={"pointer"}
        >
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              position={member.position}
              description={member.description}
              image={member.image}
              linkedin={member.linkedin}
            />
          ))}
        </Flex>
      </Flex>
    </div>
  );
};

export default Instructor;
