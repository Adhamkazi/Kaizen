import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const AchievementPage = () => {
  return (
    <div>
      <Box
        bg={useColorModeValue("#0D47A1")}
        color={useColorModeValue("gray.200", "gray.200")}
      >
        <Box w={"80%"} margin="auto" mt="50px">
          <SimpleGrid columns={{ base: 1, md: 2 }} paddingTop={"70px"}>
            <Heading
              fontWeight={"semibold"}
              mt={{ base: "30px" }}
              lineHeight={{ base: "60px", md: "60px" }}
              fontSize={"60px"}
              textAlign={"left"}
            >
              What we've been able to achieve
            </Heading>
            <Text
              fontSize={{ base: "25px", md: "30px" }}
              mt={{ base: "30px" }}
              textAlign={"left"}
            >
              We enable fast-growing companies to find, create, and oversee
              top-tier tech teams whenever they need them.
            </Text>
          </SimpleGrid>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            mt="30px"
            justifyContent={"space-between"}
            rowGap={"30px"}
            textAlign={"left"}
          >
            <Box >
              <Text fontSize={{base:"70px",md:"70px"}} fontWeight={"bold"}>
                30+
                <Text as={"span"} fontSize={"30px"}>
                  HRS/WK
                </Text>
              </Text>
              <Text fontSize={{base:"18px",md:"20px"}}>Avg Time Spent</Text>
            </Box>

            <Box>
              <Text fontSize={"70px"} fontWeight={"bold"}>
                10+
                <Text as={"span"} fontSize={"30px"}>
                  /QTR
                </Text>
              </Text>
              <Text fontSize={{base:"18px",md:"20px"}}>Products Delivered</Text>
            </Box>

            <Box>
              <Text fontSize={{base:"70px",md:"70px"}} fontWeight={"bold"}>
                $100
                <Text as={"span"} fontSize={"30px"}>
                  /HR
                </Text>
              </Text>
              <Text fontSize={{base:"18px",md:"20px"}}>Avg Team Hourly Rate</Text>
            </Box>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} paddingTop={"70px"}>
            <Box padding="20px">
              <Text fontSize={{ base: "25px", md: "30px" }} textAlign={"left"}>
                "Kaizen team augmented Contractwrangler with an incredible
                engineering resourcing support that included UI/UX, Platform
                Engineering and Dev Ops. Reliability, innovation and timely
                delivery seem the obvious hallmarks of the Kaizen
                Engineering team. Thoroughly impressed with their
                professionalism and commitment to quality and delivery."
              </Text>
              <Box mt={{ base: "30px", md: "60px" }}>
                <Text
                  fontSize={{ base: "30px", md: "30px" }}
                  fontWeight={"bold"}
                >
                  John Gengarella
                </Text>
                <Text fontSize={{ base: "15px", md: "20px" }}>
                  CEO, Contract Wrangler
                </Text>
              </Box>
            </Box>

            <Box padding="20px">
              <Text fontSize={{ base: "20px", md: "30px" }} textAlign={"left"}>
                “Kaizen Engineering team helped with building scale out
                Kubernetes solutions using Avesha's smart scalar technology.
                Thrilled to work with a development partner that has great
                platform engineering skills with a devoted team that builds to
                order with security and compliance standards."
              </Text>
              <Box mt={{ base: "30px", md: "60px" }}>
                <Text
                  fontSize={{ base: "20px", md: "30px" }}
                  fontWeight={"bold"}
                >
                  Dheeraj Ravula
                </Text>
                <Text fontSize={{ base: "15px", md: "20px" }}>
                  VP, Head of Customer Success
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default AchievementPage;
