import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const AchievementPage = () => {
  return (
    <div>
      <Box
        bg={useColorModeValue("#0D47A1")} fontFamily={"Plus Jakarta Sans"}
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
              fontSize={{ base: "23px", md: "28px" }}
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
            <Box>
              <Text fontSize={{ base: "70px", md: "70px" }} fontWeight={"bold"}>
                30+
                <Text as={"span"} fontSize={"30px"}>
                  HRS/WK
                </Text>
              </Text>
              <Text fontSize={{ base: "18px", md: "20px" }}>
                Avg Time Spent
              </Text>
            </Box>

            <Box>
              <Text fontSize={"70px"} fontWeight={"bold"}>
                10+
                <Text as={"span"} fontSize={"30px"}>
                  /QTR
                </Text>
              </Text>
              <Text fontSize={{ base: "18px", md: "20px" }}>
                Products Delivered
              </Text>
            </Box>

            <Box>
              <Text fontSize={{ base: "70px", md: "70px" }} fontWeight={"bold"}>
                $100
                <Text as={"span"} fontSize={"30px"}>
                  /HR
                </Text>
              </Text>
              <Text fontSize={{ base: "18px", md: "20px" }}>
                Avg Team Hourly Rate
              </Text>
            </Box>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} paddingTop={"70px"}>
            <Box padding="20px">
              <Text fontSize={{ base: "23px", md: "27px" }} textAlign={"left"}>
                "Kaizen team augmented Contractwrangler with an incredible
                engineering resourcing support that included UI/UX, Platform
                Engineering and Dev Ops. Reliability, innovation and timely
                delivery seem the obvious hallmarks of the Kaizen Engineering
                team. Thoroughly impressed with their professionalism and
                commitment to quality and delivery."
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
              <Text fontSize={{ base: "20px", md: "27px" }} textAlign={"left"}>
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
      <Box bg="#EDEDFB" paddingBottom={"50px"}  borderBottom={{md:"2px solid blue"}} borderTop={"2px solid blue"} >
        <Box w={"80%"} margin={"auto"} paddingTop="50px"  >
          <Heading fontSize={{base:"28px",md:"50px"}} textAlign={"left"} fontWeight={"semibold"} color='#0D47A1'  fontFamily={"Plus Jakarta Sans"}>
            Used by startups and enterprises to build great teams across the
            globe
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} paddingTop={"50px"} gap="50px">
            <Text fontFamily={"Plus Jakarta Sans"} fontSize={"18px"} lineHeight={"25px"} textAlign={"left"} >
              Businesses across the globe be it startups or enterprises
              leverages Kaizen offerings to set up their global team of
              highly skilled builders team and helped them save time, money and
              resources
            </Text>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10} rowGap={"30px"} >
              <Image src='https://static.wixstatic.com/media/fd3242_2738c50249c64ad4b1749485114b32af~mv2.png/v1/crop/x_44,y_40,w_386,h_118/fill/w_90,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Conga_HeaderLogo.png'/> 
              <Image src='https://static.wixstatic.com/media/4b0223_efe966daa5dc433897a73bc947f22377~mv2.png/v1/fill/w_123,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ByteLearn_edited.png' />
              <Image src='https://static.wixstatic.com/media/4b0223_ebf31ee67fc349ea8ba763b84d2b5a86~mv2.png/v1/crop/x_0,y_16,w_1036,h_214/fill/w_138,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/findem_edited.png'/> 
              <Image src='https://static.wixstatic.com/media/4b0223_e6ed6454aac748d7b21231319f639d55~mv2.png/v1/fill/w_74,h_24,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa_edited.png' />
           
              <Image src='https://static.wixstatic.com/media/fd3242_f631a9bb217c483ebdc716c742b93800~mv2.png/v1/fill/w_108,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Focus451.png'/> 
              <Image src='https://static.wixstatic.com/media/4b0223_f48e72b59aa74441b958b05ab9677cc2~mv2.png/v1/crop/x_2,y_0,w_1088,h_255/fill/w_120,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo.png' />
              <Image src='https://static.wixstatic.com/media/4b0223_2073d725ba9b4bc3b152131989b9acb3~mv2.png/v1/crop/x_0,y_4,w_175,h_49/fill/w_102,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Payo%20-%20Edited.png'/> 
              <Image src='https://static.wixstatic.com/media/fd3242_be214dc1eef74a5a90b9dff861aeb88f~mv2.png/v1/crop/x_12,y_177,w_1638,h_594/fill/w_102,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ANSR.png' />
           
            </SimpleGrid>
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default AchievementPage;
