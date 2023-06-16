import { Avatar, Box,  Heading, SimpleGrid, Stack, Text, useToast } from "@chakra-ui/react";
import React, {  useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";


const GenralFormData = () => {
  const toast = useToast()
  const [users, setusers] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch("https://difficult-gold-vulture.cyclic.app/genral");
      const data = await res.json();
      setusers(data);
    } catch (error) { 
      console.log(error);
    }
  };

  const handleDelete = async(id) => {
    try {
      await fetch(`https://difficult-gold-vulture.cyclic.app/genral/delete/${id}`, {
       method: "DELETE",
     });
     getData()
     toast({
       description: "User has been deleted.",
       status: 'success',
       duration: 9000,
       isClosable: true,
     })
   } catch (error) {
     console.log("Error:", error);
     toast({
       description: "Unable to delete the User.",
       status: 'error',
       duration: 9000,
       isClosable: true,
     })
   }
  };
  return (
    <div>
       <Box p={4} w={"100%"} >
      <Heading as="h2" size="lg" mb={4}>
        Form Data
      </Heading>
      
      <SimpleGrid
          columns={{ base: 1, md: 2 }}
          py={6}
          rowGap={"30px"}
          color={"white"}
          fontFamily="Roboto, sans-serif"
        >
          {users.map((item, index) => (
            <Box
              maxW={"445px"}
              w={"full"}
              bg={("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"md"}
              textAlign={"left"}
              p={6}
              overflow={"hidden"}
            >
              <Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  {index + 1}
                </Text>
                <Text as={"h1"} fontWeight={'bold'} fontFamily= "Roboto, sans-serif">   First Name    : <Text as='span' fontWeight={500} color={"Highlight"} >  {item.firstName}</Text></Text>
              <Text as={"h1"} fontWeight={'bold'}>Last Name   : <Text as='span' fontWeight={500} color={"Highlight"}>  {item.lastName}</Text> </Text>
              <Text as={"h1"} fontWeight={'bold'}>Email   : <Text as='span' fontWeight={500} color={"Highlight"}>{item.email} </Text></Text>
             <Text as={"h1"} fontWeight={'bold'}>Contact Number   :   <Text as='span' fontWeight={500} color={"Highlight"}>{item.contactNumber} </Text> </Text>
             <Text as={"h1"} fontWeight={'bold'}>Country Code    : <Text as='span' fontWeight={500} color={"Highlight"}> {item.countryCode}</Text></Text>
             <Text as={"h1"} fontWeight={'bold'}>Company Name   :   <Text as='span' fontWeight={500}color={"Highlight"} >{item.companyName} </Text> </Text>
              <Text as={"h1"} fontWeight={"bold"}>Message    : <Text as='span' fontWeight={500} color={"Highlight"}> {item.message}</Text></Text>
              <Text as={"h1"} fontWeight={'bold'}>Service     : <Text as='span' fontWeight={500} color={"Highlight"} > {item.service} </Text></Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"} gap={"40px"} >
                <Stack  direction={"row"} align={'center'} >
                <Avatar src={item.firstName} alt={"Author"} />
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>
                    {item.firstName} {item.lastName}{" "}
                  </Text>
                  <Text color={"gray.500"}>{item.date}</Text>
                </Stack>
                </Stack>
                <IconButton
                  aria-label="Delete"
                  icon={<DeleteIcon />}
                  onClick={() => handleDelete(item._id)}
                  size="md"
                  color={"red"}
                  variant="solid"
                />
              
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
    </Box>
    </div>
  );
};

export default GenralFormData;
