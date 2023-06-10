import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <Box w={{ base: "90%", md: "80%" }} margin={"auto"} pt="40px">
        <Heading
          fontFamily={"Plus Jakarta Sans"}
          textAlign={"left"}
          color={"#0D47A1"}
        >
          From our blog
        </Heading>
        <Text
          fontFamily={"Plus Jakarta Sans"}
          textAlign={"left"}
          w={{ base: "100%", md: "70%" }}
          fontSize={"19px"}
          mt="20px"
        >
          Technology is evolving at a profuse rate, stay updated with all the
          latest trends, news and hot topics of the digital world.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}  mt="30px" >

            {/* //Bog1 */}
          <Box position="relative" width="100%">
            <Image
              src={
                "https://static.wixstatic.com/media/d02399_18ac2f7c124e49c1926fc0f9ba6b1783~mv2.png/v1/fill/w_882,h_497,al_c,q_90,enc_auto/d02399_18ac2f7c124e49c1926fc0f9ba6b1783~mv2.png"
              }
              alt="Card Image"
              style={{
                filter: "brightness(60%)",
                objectFit: "cover",
                objectPosition: "center",
                height: "300px",
              }}
            />
            <Box
              position="absolute"
              top="70%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="left"
              width="100%"
              p="5"
            >
              <Text
                fontWeight="bold"
                fontSize="25px"
                mx="auto"
                noOfLines={3}
                color={"white"}
                fontFamily={"Plus Jakarta Sans"}
                cursor={"pointer"}
              >
                What is Cloud Computing: Simplifying Types, Pros, and Cons
              </Text>
            </Box>
          </Box>


{/* Blog-2 */}
          <Box position="relative" w={"100%"}>
            <Image
              src={
                "https://static.wixstatic.com/media/d02399_6a2412407abe496fa224df6982d2c4ee~mv2.png/v1/fill/w_1110,h_624,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/d02399_6a2412407abe496fa224df6982d2c4ee~mv2.png"
              }
              alt="Card Image"
              style={{
                filter: "brightness(60%)",
                objectFit: "cover",
                objectPosition: "center",
                height: "300px",
              }}
            />
            <Box
              position="absolute"
              top="70%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="left"
              width="100%"
              p="5"
            >
              <Text
                fontWeight="bold"
                fontSize="25px"
                mx="auto"
                noOfLines={3}
                color={"white"}
                fontFamily={"Plus Jakarta Sans"}
                cursor={"pointer"}
              >
                Blockchain: Reshaping the Financial Industry
              </Text>
            </Box>
          </Box>


{/* Blog-3 */}
          <Box position="relative" w={"100%"}>
            <Image
              src={
                "https://static.wixstatic.com/media/d02399_87810349ee6447ec9aef5007af30fb0c~mv2.webp"
              }
              alt="Card Image"
              style={{
                filter: "brightness(60%)",
                objectFit: "cover",
                objectPosition: "center",
                height: "300px",
              }}
            />
            <Box
              position="absolute"
              top="70%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="left"
              width="100%"
              p="5"
            >
              <Text
                fontWeight="bold"
                fontSize="25px"
                mx="auto"
                noOfLines={3}
                color={"white"}
                fontFamily={"Plus Jakarta Sans"}
                cursor={"pointer"}
              >
               Protecting Your Business: A Look at the Top 6 Cybersecurity Threats for 2023
              </Text>
            </Box>
          </Box>


{/* Blog-4 */}
<Box position="relative" w="100%" >
            <Image
              src={
                "https://static.wixstatic.com/media/nsplsh_a8be2ad766854132b5546c76e6cd4e44~mv2.jpg"
              }
              alt="Card Image"
              style={{
                filter: "brightness(60%)",
                objectFit: "cover",
                objectPosition: "center",
                height: "300px",
              }}
            />
            <Box
              position="absolute"
              top="70%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="left"
              width="100%"
              p="5"
            >
              <Text
                fontWeight="bold"
                fontSize="25px"
                mx="auto"
                noOfLines={3}
                color={"white"}
                fontFamily={"Plus Jakarta Sans"}
                cursor={"pointer"}
              >
               The Future of UI/UX Design: Key Trends and Predictions
              </Text>
            </Box>
          </Box>

{/* Blog-5 */}
<Box position="relative" w="100%">
            <Image
              src={
                "https://static.wixstatic.com/media/d02399_9f1f0e3bbdc24e378a3a87ec26f2ee27~mv2.webp"
              }
              alt="Card Image"
              style={{
                filter: "brightness(60%)",
                objectFit: "cover",
                objectPosition: "center",
                height: "300px",
              }}
            />
            <Box
              position="absolute"
              top="70%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="left"
              width="100%"
              p="5"
            >
              <Text
                fontWeight="bold"
                fontSize="25px"
                mx="auto"
                noOfLines={3}
                color={"white"}
                fontFamily={"Plus Jakarta Sans"}
                cursor={"pointer"}
              >
                Impact of Metaverse in The Banking Industry
              </Text>
            </Box>
          </Box>

{/* Blog-6 */}
<Box position="relative" w="100%">
            <Image
              src={
                "https://static.wixstatic.com/media/d02399_c289b197fea94fd3927ade3bb3b506cc~mv2.webp"
              }
              alt="Card Image"
              style={{
                filter: "brightness(60%)",
                objectFit: "cover",
                objectPosition: "center",
                height: "300px",
              }}
            />
            <Box
              position="absolute"
              top="70%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="left"
              width="100%"
              p="5"
            >
              <Text
                fontWeight="bold"
                fontSize="25px"
                mx="auto"
                noOfLines={3}
                color={"white"}
                fontFamily={"Plus Jakarta Sans"}
                cursor={"pointer"}
              >
               The Future of Business: SaaS and Open Source Software
              </Text>
            </Box>
          </Box>

        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Blogs;
